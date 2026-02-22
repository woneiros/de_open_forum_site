import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate from home to 2024 talks page", async ({ page }) => {
    await page.goto("/");

    // Click the top-nav [2024 TALKS] link
    await page.getByRole("link", { name: "[2024 TALKS]" }).click();

    // Verify we're on the 2024 page
    await expect(page).toHaveURL("/past/2024");
    await expect(
      page.getByRole("heading", { name: /Data Engineering Open Forum 2024/i })
    ).toBeVisible();
  });

  test("should navigate from home to 2025 talks page", async ({ page }) => {
    await page.goto("/");

    // Click the top-nav [2025 TALKS] link
    await page.getByRole("link", { name: "[2025 TALKS]" }).click();

    // Verify we're on the 2025 page
    await expect(page).toHaveURL("/past/2025");
    await expect(
      page.getByRole("heading", { name: /Data Engineering Open Forum 2025/i })
    ).toBeVisible();
  });

  test("should navigate back to home from 2024 talks page", async ({
    page,
  }) => {
    await page.goto("/past/2024");

    // Click the back to home link
    await page.getByRole("link", { name: "← BACK TO HOME" }).click();

    // Verify we're back on the home page
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", {
        name: /Data Engineering Open Forum/i,
        level: 1,
      })
    ).toBeVisible();
  });

  test("should navigate back to home from 2025 talks page", async ({
    page,
  }) => {
    await page.goto("/past/2025");

    // Click the back to home link
    await page.getByRole("link", { name: "← BACK TO HOME" }).click();

    // Verify we're back on the home page
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", {
        name: /Data Engineering Open Forum/i,
        level: 1,
      })
    ).toBeVisible();
  });

  test("should maintain page state during navigation", async ({ page }) => {
    // Start at home
    await page.goto("/");
    await expect(page).toHaveURL("/");

    // Navigate to 2024
    await page.getByRole("link", { name: "[2024 TALKS]" }).click();
    await expect(page).toHaveURL("/past/2024");

    // Go back to home
    await page.getByRole("link", { name: "← BACK TO HOME" }).click();
    await expect(page).toHaveURL("/");

    // Navigate to 2025
    await page.getByRole("link", { name: "[2025 TALKS]" }).click();
    await expect(page).toHaveURL("/past/2025");

    // Go back to home again
    await page.getByRole("link", { name: "← BACK TO HOME" }).click();
    await expect(page).toHaveURL("/");
  });

  test("should have working browser back button", async ({ page }) => {
    await page.goto("/");

    // Navigate to 2024 talks
    await page.getByRole("link", { name: "[2024 TALKS]" }).click();
    await expect(page).toHaveURL("/past/2024");

    // Use browser back button
    await page.goBack();
    await expect(page).toHaveURL("/");
  });
});
