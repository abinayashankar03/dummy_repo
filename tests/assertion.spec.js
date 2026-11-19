import {test,expect} from '@playwright/test'

test("assertion",async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");  //hard assertion
    await expect(page).toHaveTitle("Automation Testing Practice");
    await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible();

    await expect(page.locator('//h1[@class="title"]')).toHaveText("Automation Testing Practice");
    await expect(page.locator('//h1[@class="title"]')).toContainText("Automation Testing");

    const name='//input[@id="name"]'
    await expect(page.locator(name)).toBeEmpty();
    await page.locator(name).fill("playwright");

    await expect(page.locator(name)).toHaveValue("playwright");
    await expect(page.locator(name)).toBeEditable();

    await expect(page.locator(name)).not.toBeEmpty();

})