import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load and display main title", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Check main heading (text is split across lines with <br>)
    const heading = page.locator("h1");
    await expect(heading).toContainText("Data Engineering");
    await expect(heading).toContainText("Open Forum");
  });

  test("should display event date and location", async ({ page }) => {
    await page.goto("/");

    // Check the hero date and location rows.
    await expect(page.getByText("Tuesday, April 20, 2027")).toBeVisible();
    await expect(
      page.getByText("South San Francisco Conference Center"),
    ).toBeVisible();
  });

  test("should have links to past events", async ({ page }) => {
    await page.goto("/");

    // Check 2024 edition links
    const talks2024Link = page
      .getByRole("link", { name: "[DEOF 2024]" })
      .first();
    await expect(talks2024Link).toBeVisible();
    await expect(talks2024Link).toHaveAttribute("href", "/past/2024");

    // Check 2025 edition links
    const talks2025Link = page
      .getByRole("link", { name: "[DEOF 2025]" })
      .first();
    await expect(talks2025Link).toBeVisible();
    await expect(talks2025Link).toHaveAttribute("href", "/past/2025");
  });

  test("should have external links with correct attributes", async ({
    page,
  }) => {
    await page.goto("/");

    // Check community calendar and subscription links
    const calendarLink = page.getByRole("link", {
      name: /community calendar/i,
    }).first();
    await expect(calendarLink).toHaveAttribute(
      "href",
      "https://luma.com/det-meetup-bay-area",
    );
    await expect(calendarLink).toHaveAttribute("target", "_blank");
    await expect(page.getByRole("link", { name: "Subscribe", exact: true })).toHaveAttribute(
      "href", "https://luma.com/det-meetup-bay-area",
    );
  });

  test("should highlight four ways to get involved", async ({ page }) => {
    await page.goto("/");
    const involvement = page.getByRole("region", { name: "> GET_INVOLVED_" });
    await expect(involvement.getByRole("article")).toHaveCount(4);
    for (const name of ["Attend", "Volunteer", "Speak", "Sponsor"]) {
      await expect(involvement.getByRole("heading", { name, exact: true })).toBeVisible();
    }
    await expect(involvement).toContainText("Program Committee member or Community Ambassador");
    await expect(involvement).toContainText("Call for Proposals details are coming soon.");
    await expect(involvement.getByRole("link", { name: "Register to attend →", exact: true })).toHaveAttribute(
      "href", "https://luma.com/deof2027",
    );
    await expect(involvement.getByRole("link", { name: "Sponsor DEOF 2027 →", exact: true })).toHaveAttribute(
      "href", "https://forms.gle/HpcaGq95Pf3R2iEQ9",
    );
    await expect(involvement.getByRole("link", { name: "Get CFP updates →", exact: true })).toHaveAttribute(
      "href", "https://luma.com/det-meetup-bay-area",
    );
  });

  test("should display Golden Gate Bridge image", async ({ page }) => {
    await page.goto("/");

    // Check image is present
    const image = page.locator('img[alt*="Golden Gate Bridge"]');
    await expect(image).toBeVisible();
  });

  test("should display key features and benefits", async ({ page }) => {
    await page.goto("/");

    // Check for key messaging
    await expect(
      page.getByText(/Community-driven content with technical depth/i),
    ).toBeVisible();
    await expect(
      page.getByText(/Make connections that outlive the event/i),
    ).toBeVisible();
    await expect(
      page.getByText(/Onsite recruiting details coming soon/i),
    ).toBeVisible();
  });

  test("should display Why Attend section with benefit cards", async ({
    page,
  }) => {
    await page.goto("/");

    // Check section header
    await expect(page.getByText(/WHY_ATTEND_/)).toBeVisible();

    // Check benefit cards - use exact match to avoid matching other similar text
    await expect(
      page.getByText("Community Driven", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Lasting Connections", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Career Opportunities", { exact: true }),
    ).toBeVisible();

    // Check narrative content
    await expect(page.getByText(/world-class community/i)).toBeVisible();

    // Check career opportunities content
    await expect(
      page.getByText(/Top tech companies will be recruiting onsite\. Explore open job roles, meet the hiring teams in person/i),
    ).toBeVisible();
  });

  test("should retain the 2026 past-event link without a separate recordings section", async ({
    page,
  }) => {
    await page.goto("/");

    const recordingsLink = page.getByRole("link", {
      name: "DEOF 2026",
      exact: true,
    });
    await expect(recordingsLink).toBeVisible();
    await expect(recordingsLink).toHaveAttribute("href", "/past/2026");
    await expect(page.locator("#deof-2026-recordings")).toHaveCount(0);
    await expect(page.locator("#agenda")).toHaveCount(0);
    await expect(page.getByText("Time Range", { exact: true })).toHaveCount(0);
    await recordingsLink.click();
    await expect(page).toHaveURL("/past/2026");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Data Engineering Open Forum 2026",
    );
  });

  test("should display DET organizer information prominently", async ({
    page,
  }) => {
    await page.goto("/");

    // Check organizer section
    await expect(page.getByText(/ORGANIZED_BY_/)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Data Engineer Things/ }),
    ).toBeVisible();

    // Check key messaging about the community
    await expect(
      page.getByText(/global community built by data engineers/i),
    ).toBeVisible();
  });

  test("should mark unconfirmed 2027 details as coming soon", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#program-committee")).toContainText(
      "The DEOF 2027 program committee is coming soon.",
    );
    await expect(page.locator("#program-committee")).toContainText(
      "DEOF 2027 community ambassadors and opportunities are coming soon.",
    );
    await expect(page.locator("#onsite-recruiting")).toHaveCount(0);
    await expect(page.locator('a[href="#onsite-recruiting"]')).toHaveCount(0);
    await expect(page.locator("#sponsors")).toContainText(
      "Sponsorship for DEOF 2027 is now open!",
    );
    await expect(page.getByRole("link", { name: "Become a Sponsor", exact: true })).toHaveAttribute(
      "href", "https://forms.gle/HpcaGq95Pf3R2iEQ9",
    );
    const pastSponsors = page.getByRole("region", { name: "2026 Sponsors" });
    await expect(pastSponsors.getByRole("img")).toHaveCount(14);
    await expect(pastSponsors.locator("dt")).toHaveCount(5);
    await expect(pastSponsors.getByRole("link", { name: "Databricks", exact: true })).toHaveCount(1);
    await expect(page.locator("#det-mentorship-booth")).toHaveCount(0);
    await expect(page.getByRole("link", { name: "ImagineX Productions", exact: true })).toHaveAttribute(
      "href", "https://imaginexproductions.com/",
    );
    await expect(page.getByRole("img", { name: "ImagineX Productions logo" })).toBeVisible();
  });

  test("should offer 2027 registration and retain the past event gallery", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Data Engineering Open Forum 2027");
    const registrationLinks = page.getByRole("link", { name: "Register Now", exact: true });
    await expect(registrationLinks).toHaveCount(1);
    await expect(page.getByRole("link", { name: "RSVP", exact: true })).toHaveAttribute(
      "href", "https://luma.com/deof2027",
    );
    for (const link of await registrationLinks.all()) {
      await expect(link).toHaveAttribute("href", "https://luma.com/deof2027");
    }
    await expect(page.getByRole("img", { name: "Frontiers of Data keynote panel - Data Engineering Open Forum 2026", exact: true })).toBeVisible();
    await expect(page.getByText("Photo: DuHon Photography", { exact: true })).toBeVisible();
    await page.getByRole("button", { name: /How do I register for the event/ }).click();
    await expect(page.getByRole("link", { name: "event registration page" })).toHaveAttribute(
      "href", "https://luma.com/deof2027",
    );
  });

  test("shows a navigable showcase of 2026 speakers", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#speakers-2026");
    const showcase = page.getByRole("region", { name: "Speakers from DEOF 2026" });
    const profiles = showcase.getByRole("list", { name: "2026 speaker profiles" });
    await expect(profiles.getByRole("listitem")).toHaveCount(25);
    await expect(profiles.getByRole("img", { name: "Andreas Neumann portrait", exact: true })).toBeVisible();
    await expect(showcase.getByRole("button", { name: "Pause speaker scrolling" })).toHaveCount(0);
    await showcase.getByRole("button", { name: "Next speakers" }).click();
    await expect.poll(() => profiles.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
    await showcase.getByRole("button", { name: "Previous speakers" }).click();
    await expect.poll(() => profiles.evaluate(element => element.scrollLeft)).toBe(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    await page.emulateMedia({ reducedMotion: "no-preference" });
    await showcase.getByRole("button", { name: "Pause speaker scrolling" }).click();
    await expect(showcase.getByRole("button", { name: "Resume speaker scrolling" })).toHaveAttribute("aria-pressed", "true");
  });

  test("should display FAQ section with accordion", async ({ page }) => {
    await page.goto("/");

    // Check section header
    const faqHeader = page.getByText(/>\s*FAQ_/);
    await faqHeader.scrollIntoViewIfNeeded();
    await expect(faqHeader).toBeVisible();

    // Check some FAQ questions are present
    await expect(
      page.getByRole("button", { name: /When and where is the conference\?/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", {
        name: /Who organizes Data Engineering Open Forum 2027\?/,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Is there a Code of Conduct\?/ }),
    ).toBeVisible();
  });

  test("should expand and collapse FAQ accordion items", async ({ page }) => {
    await page.goto("/");

    // Find an accordion item
    const firstQuestion = page.getByRole("button", {
      name: /When and where is the conference\?/,
    });
    await expect(firstQuestion).toBeVisible();

    // Click to expand
    await firstQuestion.click();

    // Check that answer is now visible
    await expect(
      page.getByText(
        /The Data Engineering Open Forum will be held on Tuesday, April 20, 2027 at/i,
      ),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "South San Francisco Conference Center" }),
    ).toBeVisible();

    // Click again to collapse
    await firstQuestion.click();
  });
});
