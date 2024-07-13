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

test("Check values", async () => {
  const mytypes = new BaseTypes();
  console.log(mytypes.isEqual(444, 3454545));
});

test("@C21 click on View all Next level party food", {
  tag: "@C21",
} ,async ({ page }) => {
  await page.goto("/");
  const link = await page.getByTestId("Stack").locator("[href='/search/?category=catering']").getAttribute("href");
  await page.goto(link || "/");
  await expect(page).toHaveURL(/.*search\/\?category=catering$/);

  const locator = page.locator("div[data-scrollbar]");
  let timeWait = 10;
  let isVisible = await locator.isVisible();
  while(!isVisible && timeWait > 0){
    isVisible = await locator.isVisible();
    await page.waitForTimeout(1000);
    console.log("Is visible: " + isVisible + " Wait " + timeWait);
    timeWait = timeWait - 1;
  }

  await expect(page.locator("div[data-scrollbar]")).toBeVisible({ timeout: 10000 });
});

test.only("Type casting", async () => {
  // await test.step("Go to SEARCH", async () => {
  //   await page.goto("/");
  //   await page.getByTestId("Button").getByText("SEARCH").click();
  //   await page.waitForURL("**/search/?");
  // });

  await test.step("Get value", async () => {


    // const text = await page.getByTestId("Stack").locator("h4").innerText();

    // const flteredText = text.replace("services available to book now", "").trim();
    //const countOfServices = Number(flteredText);

    // console.log(">>>>>>>>>>>>>> " + typeof flteredText);
    // console.log(">>>>>>>>>>>>>> " + typeof (Number(flteredText) + 5));
    // console.log(">>>>>>>>>>>>>> " + typeof ((flteredText as unknown) as number));

    const a = [15, 11];
    const b = {
      key: "string 1",
      key2: 232,
      key3: [
        1, "2", { b: "1" },
      ],
    };

    const c = "{\"key\":\"string1\",\"key2\":232,\"key3\":[1,\"2\",{\"b\":\"1\"}]}";

    console.log(">>>>>>>>>>>>>> " + typeof c + " " + c);
    console.log(">>>>>>>>>>>>>> " + typeof JSON.parse(c) + " " + JSON.parse(c));
    console.log(">>>>>>>>>>>>>> " + typeof String(b) + " \n" + JSON.stringify(b, undefined, 4));

  });

});
