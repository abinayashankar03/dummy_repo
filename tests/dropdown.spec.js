import {test,expect} from '@playwright/test'

test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.locator('//select[@id="country"]').selectOption("Canada");
    // await page.locator('//select[@id="country"]').selectOption({label:"Canada"});

    // await page.locator('//select[@id="country"]').selectOption({value:"uk"})

    await page.locator('//select[@id="country"]').selectOption({index:5})

    // const text=await page.locator('//select[@id="country"]').textContent()
    // console.log(text);
    //textContent
    //alltextContent
    //innerText
    //allinnerText

    const text=await page.locator('//select[@id="country"]/option').allTextContents()
    for(let i of text){
        console.log(i.trim());
    }
    
    const dummy=await page.locator('//select[@id="country"]/option').count()
    console.log("count :",dummy);

    await expect(page.locator('//select[@id="country"]/option')).toHaveCount(10)
    
    
    await page.pause()
})

test("multi-select dropdown @reg",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red","Blue","White"]);

    await page.pause()
})