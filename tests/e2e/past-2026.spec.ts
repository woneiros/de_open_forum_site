import { test, expect } from "@playwright/test";
import sponsorLogoBounds from "../../data/sponsor-logo-bounds.json";
import eventData from "../../data/past/2026.json";

test.describe("2026 Talks Page", () => {
  test("shows the 2026 agenda, speakers, and matched recordings", async ({ page }) => {
    await page.goto("/past/2026");

    await expect(page).toHaveTitle("Talks 2026 - Data Engineering Open Forum");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Data Engineering Open Forum 2026",
    );
    await expect(page.getByText("// Thursday, April 16, 2026")).toBeVisible();
    await expect(page.getByRole("article").getByRole("heading", { level: 2 })).toHaveCount(15);
    await expect(page.getByText("Indrajit Roy", { exact: true })).toBeVisible();
    await expect(page.getByText("Michelle Ufford", { exact: true })).toBeVisible();
    await expect(page.getByText("Distinguished Architect, Data & AI", { exact: true })).toBeVisible();

    await expect(page.getByRole("link", { name: /VIEW FULL PLAYLIST/ })).toHaveAttribute(
      "href",
      "https://www.youtube.com/playlist?list=PLTDfuxyNWpIxxV_uzLijxZfpLbIvlmm-C",
    );
    await expect(page.getByRole("link", { name: /WATCH ON YOUTUBE/ })).toHaveCount(15);
    const frontiers = page.getByRole("article").filter({
      has: page.getByRole("heading", { name: "Frontiers of Data: The Future of Data Engineering in an AI World", exact: true }),
    });
    await expect(frontiers.getByRole("link", { name: /WATCH ON YOUTUBE/ })).toHaveAttribute(
      "href",
      "https://www.youtube.com/watch?v=k8-UZNSvQF0&list=PLTDfuxyNWpIxxV_uzLijxZfpLbIvlmm-C",
    );

    const unrecorded = page.getByRole("region", { name: "Other Sessions" });
    await expect(unrecorded.getByRole("listitem")).toHaveCount(3);
    await expect(unrecorded.getByRole("heading", { name: /Breaking Down Data Silos/ })).toBeVisible();
    await expect(unrecorded.getByRole("link")).toHaveCount(0);
    await expect(unrecorded.getByRole("button")).toHaveCount(0);
    await expect(unrecorded.getByRole("img")).toHaveCount(0);
    const finalRecording = await page.getByRole("article").last().boundingBox();
    const unrecordedSection = await unrecorded.boundingBox();
    expect(unrecordedSection!.y).toBeGreaterThanOrEqual(finalRecording!.y + finalRecording!.height);

    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });

  test("shows speaker details without portraits and loads recording players on demand", async ({ page }) => {
    await page.goto("/past/2026");
    const sessions = page.getByRole("article");
    await expect(sessions).toHaveCount(15);
    await expect(page.getByRole("img", { name: /portrait$/ })).toHaveCount(0);
    await expect(page.getByRole("button", { name: /^Play recording:/ })).toHaveCount(15);
    await expect(page.locator("iframe")).toHaveCount(0);

    const firstCard = await sessions.nth(0).boundingBox();
    const secondCard = await sessions.nth(1).boundingBox();
    expect(Math.abs(firstCard!.x - secondCard!.x)).toBeLessThan(1);
    expect(secondCard!.y).toBeGreaterThanOrEqual(firstCard!.y + firstCard!.height);
    const preview = await sessions.first().getByRole("button", { name: /^Play recording:/ }).boundingBox();
    const title = await sessions.first().getByRole("heading", { level: 2 }).boundingBox();
    const desktop = await page.evaluate(() => window.innerWidth >= 768);
    if (desktop) {
      expect(title!.x).toBeGreaterThanOrEqual(preview!.x + preview!.width);
    } else {
      expect(title!.y).toBeGreaterThanOrEqual(preview!.y + preview!.height);
    }

    await page.getByRole("button", { name: /^Play recording:/ }).first().click();
    await expect(page.locator("iframe")).toHaveCount(1);
    await expect(page.locator("iframe")).toHaveAttribute(
      "src", "https://www.youtube-nocookie.com/embed/VLJhGDwTS3I?autoplay=1&rel=0",
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });

  test("shows compact 2026 sponsor logos below the recordings", async ({ page }) => {
    await page.goto("/past/2026");
    const sponsors = page.getByRole("region", { name: "2026 Sponsors" });
    await expect(sponsors).toBeVisible();
    await expect(sponsors.locator("dt")).toHaveCount(5);
    await expect(sponsors.getByRole("link")).toHaveCount(14);
    await expect(sponsors.locator("img")).toHaveCount(14);
    const visibleLogos = await sponsors.locator("a > span").evaluateAll(logos =>
      logos.map(logo => ({
        name: logo.parentElement?.getAttribute("aria-label"),
        height: logo.getBoundingClientRect().height,
      })),
    );
    const opticalAreas = visibleLogos.map(logo => {
      const sponsor = eventData.sponsorTiers.flatMap(group => group.sponsors)
        .find(sponsor => sponsor.name === logo.name)!;
      const bounds = sponsorLogoBounds[sponsor.logoSrc as keyof typeof sponsorLogoBounds];
      return bounds.inkArea * (logo.height / bounds.contentHeight) ** 2;
    });
    // Permit modest optical adjustments for dense wordmarks.
    expect(Math.max(...opticalAreas) / Math.min(...opticalAreas)).toBeLessThan(1.4);
    const happyHour = sponsors.locator("dl > div").filter({ hasText: "HAPPY HOUR" });
    await expect(happyHour.getByRole("link", { name: "Databricks", exact: true })).toHaveCount(0);
    await expect(happyHour.getByRole("link", { name: "Datadog", exact: true })).toBeVisible();
    await expect(sponsors.getByRole("link", { name: "Databricks", exact: true })).toHaveCount(1);
    await expect(sponsors.getByRole("link", { name: "PhoenixAI", exact: true })).toHaveAttribute(
      "href", "https://celerdata.com/",
    );
    expect(await sponsors.evaluate(section => [...document.querySelectorAll("a")]
      .filter(link => link.textContent?.includes("WATCH ON YOUTUBE"))
      .every(link => Boolean(link.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING)))).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });

  test("opens from the homepage and links back home", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "[DEOF 2026]", exact: true }).click();
    await expect(page).toHaveURL("/past/2026");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Data Engineering Open Forum 2026");
    await page.getByRole("link", { name: "← BACK TO HOME" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByText("Tuesday, April 20, 2027")).toBeVisible();
  });
});
