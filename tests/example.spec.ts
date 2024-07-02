import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Poptop Parties UK - Party experiences for extraordinary private and corporate events/);
  const expectedMainText = "Home of extraordinary party experiences";
  expect(await page.getByTestId("HeroSection").locator("h1").innerText()).toEqual(expectedMainText);
});

test("has search page", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("Button").getByText("SEARCH").click();
  await page.waitForURL("**/search/?");
  await expect(page.locator("div[data-scrollbar]"), "Search page didn't opened").toBeVisible({ timeout: 10000 });
});
