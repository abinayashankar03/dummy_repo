import {test,expect} from '@playwright/test'

test("radio button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="male"]').check();
    await expect(page.locator('//input[@id="male"]')).toBeChecked();

    await expect(page.locator('//input[@id="female"]')).not.toBeChecked()

    await page.pause()
})

test("checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="monday"]').check();
    await expect(page.locator('//input[@id="monday"]')).toBeChecked();   

    await page.pause();

    await page.locator('//input[@id="monday"]').uncheck();

    await page.pause();
})

test("multi select checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // let locat=['//input[@id="tuesday"]','//input[@id="monday"]','//input[@id="sunday"]','//input[@id="friday"]'];

    // for (let i of locat){
    //     await page.locator(i).check();
    // }

    let days=["monday","wednesday","friday","sunday","tuesday"]

    for(let i of days){
        await page.locator(`//input[@id="${i}"]`).check();
    }
    
    await page.pause()

})