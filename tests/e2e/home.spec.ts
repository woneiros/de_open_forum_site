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

    // Check event date and location line
    await expect(
      page.getByText(/San Francisco: April 16th, 2026/)
    ).toBeVisible();
  });

  test("should have links to past events", async ({ page }) => {
    await page.goto("/");

    // Check 2024 edition links
    const talks2024Link = page.getByRole("link", { name: "[2024]" }).first();
    await expect(talks2024Link).toBeVisible();
    await expect(talks2024Link).toHaveAttribute("href", "/past/2024");

    // Check 2025 edition links
    const talks2025Link = page.getByRole("link", { name: "[2025]" }).first();
    await expect(talks2025Link).toBeVisible();
    await expect(talks2025Link).toHaveAttribute("href", "/past/2025");
  });

  test("should have external links with correct attributes", async ({
    page,
  }) => {
    await page.goto("/");

    // Check Google Group link
    const googleGroupLink = page.getByRole("link", {
      name: /Google Group/i,
    });
    await expect(googleGroupLink).toHaveAttribute(
      "href",
      "https://groups.google.com/g/data-engineering-open-forum"
    );
    await expect(googleGroupLink).toHaveAttribute("target", "_blank");
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
      page.getByText(/Community-driven content with technical depth/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Make connections that outlive the event/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Exclusive access to career opportinities/i)
    ).toBeVisible();
  });

  test("should display Why Attend section with benefit cards", async ({
    page,
  }) => {
    await page.goto("/");

    // Check section header
    await expect(
      page.getByText(/WHY_ATTEND_/)
    ).toBeVisible();

    // Check benefit cards - use exact match to avoid matching other similar text
    await expect(page.getByText("Community Driven", { exact: true })).toBeVisible();
    await expect(page.getByText("Lasting Connections", { exact: true })).toBeVisible();
    await expect(page.getByText("Career Opportunities", { exact: true })).toBeVisible();

    // Check narrative content
    await expect(page.getByText(/world-class community/i)).toBeVisible();

    // Check career opportunities content
    await expect(
      page.getByText(/job opportunities at top tech companies/i)
    ).toBeVisible();
  });


  test("should display expanded Agenda section with past links", async ({
    page,
  }) => {
    await page.goto("/");

    // Check agenda section
    await expect(page.getByText("> AGENDA_", { exact: true })).toBeVisible();
    await expect(page.getByText(/Coming soon!/)).toBeVisible();

    // Check links to previous sessions
    await expect(page.getByText(/CHECK_OUT_PREVIOUS_SESSIONS:/i)).toBeVisible();

    // Verify there are links to 2024 and 2025 in agenda section
    const links2024 = page.getByRole("link", { name: "[2024]" });
    await expect(links2024.first()).toBeVisible();

    const links2025 = page.getByRole("link", { name: "[2025]" });
    await expect(links2025.first()).toBeVisible();
  });

  test("should display DET organizer information prominently", async ({
    page,
  }) => {
    await page.goto("/");

    // Check organizer section
    await expect(page.getByText(/ORGANIZED_BY_/)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Data Engineer Things/ })).toBeVisible();

    // Check key messaging about the community
    await expect(
      page.getByText(/global community built by data engineers/i)
    ).toBeVisible();
  });

  test("should display all Program Committee members", async ({ page }) => {
    await page.goto("/");

    // Check section header
    await expect(page.getByText(/PROGRAM_COMMITTEE_/)).toBeVisible();

    // Check all 9 committee members are displayed
    const committeeMembers = [
      "Xinran Waibel",
      "Apoorva Bapat",
      "Goutham Budati",
      "Jerry Wang",
      "Michelle Winters",
      "Sharath Chandra",
      "Shruthi Jaganathan",
      "Tulika Bhatt",
      "Will Monge",
    ];

    const committeeSection = page.locator("#program-committee");
    for (const member of committeeMembers) {
      await expect(
        committeeSection.getByText(member, { exact: true })
      ).toBeVisible();
    }

    // Check some company names
    await expect(page.getByText(/Netflix/).first()).toBeVisible();
    await expect(page.getByText(/Airbnb/).first()).toBeVisible();
    await expect(page.getByText(/Figma/).first()).toBeVisible();
  });

  test("should display FAQ section with accordion", async ({ page }) => {
    await page.goto("/");

    // Check section header
    const faqHeader = page.getByText(/FREQUENTLY_ASKED_QUESTIONS_/);
    await faqHeader.scrollIntoViewIfNeeded();
    await expect(faqHeader).toBeVisible();

    // Check some FAQ questions are present
    await expect(
      page.getByRole("button", { name: /When and where is the conference\?/ })
    ).toBeVisible();
    await expect(
      page.getByRole("button", {
        name: /Who organizes Data Engineering Open Forum 2026\?/,
      })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Is there a Code of Conduct\?/ })
    ).toBeVisible();
  });

  test("should expand and collapse FAQ accordion items", async ({ page }) => {
    await page.goto("/");

    // Find an accordion item
    const firstQuestion = page.getByText(/When and where is the conference?/);
    await expect(firstQuestion).toBeVisible();

    // Click to expand
    await firstQuestion.click();

    // Check that answer is now visible
    await expect(
      page.getByText(
        /April 16th, 2026 at the Contemporary Jewish Museum in San Francisco, California/
      )
    ).toBeVisible();

    // Click again to collapse
    await firstQuestion.click();
  });
});
