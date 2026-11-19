import {test,expect} from '@playwright/test'

test("handling table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const pagination=page.locator('//table[@id="productTable"]/following-sibling::ul/descendant::a')
    const rows=page.locator('//table[@id="productTable"]/tbody/tr')

    let paginationCount=await pagination.count()
    let totalPageCount=0;
    

    for(let i=1;i<=paginationCount;i++){
        await page.locator(`//a[text()="${i}"]`).click()
        let rowsCount=await rows.count()
        totalPageCount+=rowsCount
    }

    console.log("TotalPageCount =",totalPageCount);

    await page.pause()
    


})