import {test,expect} from '@playwright/test'

test("handling frames using frame method",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/")

    await expect(page.locator('//h1[text()="Iframes"]')).toBeVisible()

    const automationFrame=await page.frames()

    console.log("Count  :",automationFrame.length);

    for(let i of automationFrame){
        console.log("URL :",i.url());
    }

    //frame  => name , url
    //framelocator  => locators

    const playwright=await page.frame({name:"top-iframe"})

    await playwright.locator('//a[text()="Docs"]').click()

    const selenium=await page.frame({url:"https://www.selenium.dev/"})

    await selenium.locator('//span[text()="Documentation"]').click()

    await page.pause()


})

test("handling frame using framelocator method",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/")

    await expect(page.locator("//p[text()='I’m an iframe']")).toHaveText("I’m an iframe")

    const playwright=await page.frameLocator('//iframe[@id="iframe-1"]')

    await playwright.locator('//a[text()="MCP"]').click()

    const selenium=await page.frameLocator('//iframe[@title="Selenium"]')

    await selenium.locator('//span[text()="Projects"]').click()

    await page.pause()
})

test("nested frame using frame method",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const iFrame=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})
    await expect(iFrame.locator('//h5[text()="Nested iFrames"]')).toBeVisible()

    const childFrame=await iFrame.childFrames()[0]

    await childFrame.locator('//input[@type="text"]').fill("playwright")

    await page.pause()

})

test("nested frame using framelocator method",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const iFrame=await page.frameLocator('//div[@id="Multiple"]/iframe')
    await expect(iFrame.locator('//h5[text()="Nested iFrames"]')).toBeVisible()

    const childFrame=await iFrame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')

    await childFrame.locator('//input[@type="text"]').fill("playwright")

    await page.pause()

})