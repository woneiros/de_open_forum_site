import { test, expect } from "@playwright/test";

test.describe("2024 Talks Page", () => {
  test("should display event metadata", async ({ page }) => {
    await page.goto("/past/2024");

    // Check title
    await expect(
      page.getByText("Data Engineering Open Forum 2024")
    ).toBeVisible();

    // Check description
    await expect(
      page.getByText(/inaugural Data Engineering Open Forum/i)
    ).toBeVisible();

    // Check event date section exists
    await expect(page.getByText("2024").first()).toBeVisible();
  });

  test("should display playlist link", async ({ page }) => {
    await page.goto("/past/2024");

    // Check playlist link
    const playlistLink = page.getByRole("link", {
      name: /VIEW FULL PLAYLIST ON YOUTUBE/i,
    });
    await expect(playlistLink).toBeVisible();
    await expect(playlistLink).toHaveAttribute("target", "_blank");
    await expect(playlistLink).toHaveAttribute(
      "href",
      /youtube\.com.*playlist/i
    );
  });

  test("should display talk cards with YouTube links", async ({ page }) => {
    await page.goto("/past/2024");

    // Check that talk cards are rendered
    await expect(
      page.getByText(/Evolving from Rule-based Classifier/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Machine Learning Powered Auto Remediation/i)
    ).toBeVisible();

    // Check YouTube links have correct attributes
    const youtubeLinks = page.getByRole("link", { name: /WATCH ON YOUTUBE/i });
    const firstLink = youtubeLinks.first();
    await expect(firstLink).toBeVisible();
    await expect(firstLink).toHaveAttribute("target", "_blank");
    await expect(firstLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("should display author names and titles", async ({ page }) => {
    await page.goto("/past/2024");

    // Check for author name and title
    await expect(page.getByText("Stephanie Vezich Tamayo")).toBeVisible();
    await expect(
      page.getByText(/Senior Machine Learning Engineer at Netflix/i)
    ).toBeVisible();
  });

  test("should display footer", async ({ page }) => {
    await page.goto("/past/2024");

    // Check footer content
    await expect(
      page.getByText("// Data Engineering Open Forum")
    ).toBeVisible();
    await expect(page.getByText("[OPEN]")).toBeVisible();
    await expect(page.getByText("[TECHNICAL]")).toBeVisible();
    await expect(page.getByText("[COMMUNITY]")).toBeVisible();
  });
});

test.describe("2025 Talks Page", () => {
  test("should display event metadata", async ({ page }) => {
    await page.goto("/past/2025");

    // Check title
    await expect(
      page.getByText("Data Engineering Open Forum 2025")
    ).toBeVisible();

    // Check description
    await expect(
      page.getByText(/second edition of Data Engineering Open Forum/i)
    ).toBeVisible();

    // Check event date section exists
    await expect(page.getByText("2025").first()).toBeVisible();
  });

  test("should display playlist link", async ({ page }) => {
    await page.goto("/past/2025");

    // Check playlist link
    const playlistLink = page.getByRole("link", {
      name: /VIEW FULL PLAYLIST ON YOUTUBE/i,
    });
    await expect(playlistLink).toBeVisible();
    await expect(playlistLink).toHaveAttribute("target", "_blank");
    await expect(playlistLink).toHaveAttribute(
      "href",
      /youtube\.com.*playlist/i
    );
  });

  test("should display talk cards", async ({ page }) => {
    await page.goto("/past/2025");

    // Check that talk cards are rendered
    await expect(
      page.getByText(/How Netflix built a Real-Time Distributed Graph/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Apache Spark™ 4.0 for Data Engineering/i)
    ).toBeVisible();
  });

  test('should display "Recording not available" for talks without YouTube links', async ({
    page,
  }) => {
    await page.goto("/past/2025");

    // Check that at least one "not available" message appears (there are multiple)
    await expect(
      page.getByText("// Recording not available").first()
    ).toBeVisible();
  });

  test("should display talks with YouTube links", async ({ page }) => {
    await page.goto("/past/2025");

    // Check that some talks have YouTube links
    const youtubeLinks = page.getByRole("link", { name: /WATCH ON YOUTUBE/i });
    await expect(youtubeLinks.first()).toBeVisible();
  });

  test("should display Lightning Talks", async ({ page }) => {
    await page.goto("/past/2025");

    // Check for Lightning Talks
    await expect(
      page.getByText(/Lightning Talks: Speed up your pipelines/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Lightning Talks: Do Work that Matters/i)
    ).toBeVisible();
  });
});

test.describe("Talks Page Mobile", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should be readable on mobile (2024)", async ({ page }) => {
    await page.goto("/past/2024");

    // Check that content is visible
    await expect(
      page.getByText("Data Engineering Open Forum 2024")
    ).toBeVisible();

    // Check that talk cards are still visible
    await expect(
      page.getByText(/Evolving from Rule-based Classifier/i)
    ).toBeVisible();
  });

  test("should be readable on mobile (2025)", async ({ page }) => {
    await page.goto("/past/2025");

    // Check that content is visible
    await expect(
      page.getByText("Data Engineering Open Forum 2025")
    ).toBeVisible();
  });
});
