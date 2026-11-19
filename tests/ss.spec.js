import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.screenshot({path:"D:/ZenV_class/Playwright/PW_oct_7am_batch/files/"+"automation.png"});
    await page.screenshot({path:"D:/ZenV_class/Playwright/PW_oct_7am_batch/files/"+"fullpage.png",fullPage:true});
    await page.locator('//div[@id="HTML8"]').screenshot({path:"D:/ZenV_class/Playwright/PW_oct_7am_batch/files/"+"table.png"})
})