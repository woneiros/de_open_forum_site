import { test, expect } from "@playwright/test";

test.describe("Job Opportunities Page", () => {
  test("should load with correct header and description", async ({ page }) => {
    await page.goto("/jobs");

    await expect(page.getByText(/>\s*JOB_OPPORTUNITIES_/)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Job Opportunities" }),
    ).toBeVisible();
    await expect(
      page.getByText(/Our event partners are looking for top talent/i),
    ).toBeVisible();
  });

  test("should display job listings from all companies", async ({ page }) => {
    await page.goto("/jobs");

    // Each company badge is uppercased
    await expect(page.getByText("OPENAI").first()).toBeVisible();
    await expect(page.getByText("NETFLIX").first()).toBeVisible();
    await expect(page.getByText("AIRBNB").first()).toBeVisible();
  });

  test("should filter listings when searching by company", async ({ page }) => {
    await page.goto("/jobs");

    await page.getByPlaceholder(/search by company/i).fill("OpenAI");

    await expect(page.getByText("OPENAI")).toBeVisible();
    await expect(page.getByText("NETFLIX")).not.toBeVisible();
    await expect(page.getByText("AIRBNB")).not.toBeVisible();
  });

  test("should show empty state when search has no matches", async ({
    page,
  }) => {
    await page.goto("/jobs");

    await page.getByPlaceholder(/search by company/i).fill("xyzzy-no-match");

    await expect(page.getByText(/no results found/i)).toBeVisible();
    await expect(page.getByText(/0 opportunities found/i)).toBeVisible();
  });

  test("should filter by location type chip", async ({ page }) => {
    await page.goto("/jobs");

    // OpenAI is the only company with exclusively Onsite listings —
    // filtering Remote should hide it
    await page.getByRole("button", { name: /remote/i }).click();

    await expect(page.getByText("OPENAI")).not.toBeVisible();
    await expect(page.getByText("NETFLIX").first()).toBeVisible();

    // Click again to deselect — OpenAI should reappear
    await page.getByRole("button", { name: /remote/i }).click();
    await expect(page.getByText("OPENAI")).toBeVisible();
  });

  test("should have apply links that open in a new tab", async ({ page }) => {
    await page.goto("/jobs");

    const applyLinks = page.getByRole("link", { name: "APPLY →" });
    const count = await applyLinks.count();
    expect(count).toBeGreaterThan(0);

    await expect(applyLinks.first()).toHaveAttribute("target", "_blank");
    await expect(applyLinks.first()).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  test("should navigate back to home", async ({ page }) => {
    await page.goto("/jobs");

    await page.getByRole("link", { name: "← BACK TO HOME" }).click();

    await expect(page).toHaveURL("/");
  });
});
