import { test, expect } from "@playwright/test";

test.describe("Job Opportunities Page", () => {
  for (const route of ["/jobs", "/jobs?company=Netflix"]) {
    test(`shows coming-soon information without listings at ${route}`, async ({ page }) => {
      await page.goto(route);
      await expect(page.getByRole("heading", { name: "Job Opportunities" })).toBeVisible();
      await expect(page.getByText("Recruiting partners and job opportunities for DEOF 2027 are coming soon.")).toBeVisible();
      await expect(page.getByTestId("job-listings")).toHaveCount(0);
      await expect(page.getByRole("textbox")).toHaveCount(0);
      await expect(page.getByRole("link", { name: "APPLY →" })).toHaveCount(0);
      await expect(page.getByRole("link", { name: "Register Now" })).toHaveAttribute(
        "href", "https://luma.com/deof2027?utm_source=website-job-page",
      );
    });
  }

  test("should navigate back to home", async ({ page }) => {
    await page.goto("/jobs");
    await page.getByRole("link", { name: "← BACK TO HOME" }).click();
    await expect(page).toHaveURL("/");
  });
});
