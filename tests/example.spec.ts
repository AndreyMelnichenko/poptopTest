import { test, expect } from "@playwright/test";
import { BaseTypes } from "../src/types/baseTypes";

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

test("Click on View All", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("Stack").locator("[href='/search/?category=catering']").click();
});

test("Click on Picture", async ({ page }) => {
  await page.goto("/");
  await page
    .locator("h4")
    .getByText("BBQ")
    .locator(" ~ img")
    .first()
    .click();
});

test.only("Check values", async () => {
  const mytypes = new BaseTypes();
  console.log(mytypes.isEqual(444, 3454545));
});
