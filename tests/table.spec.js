import {test,expect} from '@playwright/test'

test("handling table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const column=await page.locator('//table[@id="productTable"]/descendant::th')
    const rows=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("COLUMN :",await column.count());
    console.log("ROWS :",await rows.count());
    
    //method 1
    // await page.locator('//table[@id="productTable"]/descendant::td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()

    //method 2
    // await rows.locator('//td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()

    //method 3
    const phone=await rows.filter({
        has:page.locator('td'),
        hasText:"Smartphone"
    })

    await phone.locator('//input[@type="checkbox"]').check()

    await page.pause()


})

test("handling table(multiple checkboxes)",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const rows=await page.locator('//table[@id="productTable"]/tbody/tr')

    //method 1
    // const product=["Smartphone","Smartwatch","Laptop"]

    // for(let i of product){
    //     await rows.locator(`//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
    // }

    //method 2
    const phone=await rows.filter({
        has:page.locator('td'),
        hasText:/Smartphone|Smartwatch|Laptop/
    })

    const product=await phone.all()

    for(let i of product){
        await i.locator('//input[@type="checkbox"]').check()
    }
    
    await page.pause()


})