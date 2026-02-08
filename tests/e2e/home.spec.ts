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

    // Check location badge in top nav
    await expect(page.getByText("[SAN FRANCISCO, CA]")).toBeVisible();

    // Check event date
    await expect(page.getByText(/April 16th, 2026/)).toBeVisible();
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
      name: "data-engineering-open-forum",
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
      page.getByText(/Technically deep, globally relevant/i)
    ).toBeVisible();
    await expect(page.getByText(/Community-driven content/i)).toBeVisible();
    await expect(
      page.getByText(/Open dialogue & collaboration/i)
    ).toBeVisible();
  });

  test("should display Why Attend section with benefit cards", async ({
    page,
  }) => {
    await page.goto("/");

    // Check section header
    await expect(page.getByText(/WHY_ATTEND_/)).toBeVisible();

    // Check benefit cards - use exact match to avoid matching other similar text
    await expect(page.getByText("Community-Driven", { exact: true })).toBeVisible();
    await expect(page.getByText("Vendor-Neutral", { exact: true })).toBeVisible();
    await expect(page.getByText("Authentic Connections", { exact: true })).toBeVisible();

    // Check narrative content
    await expect(
      page.getByText(/grassroots community gathering/i)
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

    // Check key messaging about vendor-neutral and community-driven nature
    await expect(page.getByText(/vendor-neutral and community-driven/i)).toBeVisible();
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
      "Michelle Winter",
      "Sharath Chandra",
      "Shruthi Jaganath",
      "Tulika Bhatt",
      "Will Monge",
    ];

    for (const member of committeeMembers) {
      await expect(page.getByText(member)).toBeVisible();
    }

    // Check some company names
    await expect(page.getByText(/OpenAI/).first()).toBeVisible();
    await expect(page.getByText(/Netflix/).first()).toBeVisible();
    await expect(page.getByText(/Airbnb/).first()).toBeVisible();
  });

  test("should display FAQ section with accordion", async ({ page }) => {
    await page.goto("/");

    // Check section header
    await expect(page.getByText(/FREQUENTLY_ASKED_QUESTIONS_/)).toBeVisible();

    // Check some FAQ questions are present
    await expect(
      page.getByText(/When and where is the conference?/)
    ).toBeVisible();
    await expect(page.getByText(/Who organizes this event?/)).toBeVisible();
    await expect(
      page.getByText(/What kind of sessions can I expect?/)
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
        /The Data Engineering Open Forum will be held on April 16th, 2026 in San Francisco, California/
      )
    ).toBeVisible();

    // Click again to collapse
    await firstQuestion.click();
  });
});
