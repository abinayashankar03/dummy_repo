import {test,expect} from '@playwright/test'

test("page navigation",async({page})=>{   //page=tab
    await page.goto("https://www.facebook.com/");

    await page.waitForTimeout(3000)

})

test("login using css",async({page})=>{
    await page.goto("https://www.facebook.com/")

    await page.locator("#_R_c9l6neappb6amH1_").fill("example@gmail.com")
    await page.locator('[name="pass"]').fill("password@123")

    await page.locator('[aria-label="Log in"]').click()

    await page.waitForTimeout(5000)

})

test("login using built-in-locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page.getByAltText("company-branding")).toBeVisible();
    // await expect(page.getByText("Login")).toBeVisible();
    await expect(page.getByRole("heading",{name:"Login"})).toBeVisible()

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole("button",{name:" Login "}).click()

    await page.pause()

})

test("login using xpath",async({page})=>{
    await page.goto("https://www.facebook.com/");

    await page.locator('//input[@id="_R_c9l6neappb6amH1_"]').fill("example@gmail.com");
    await page.locator('//input[@id="_R_cdl6neappb6amH1_"]').fill("password@123");

    await page.locator('//div[@aria-label="Log in"]').click();

    await page.pause()

})