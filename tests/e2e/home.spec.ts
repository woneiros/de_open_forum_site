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
});
