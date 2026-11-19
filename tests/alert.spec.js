import {test,expect} from '@playwright/test'

test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog",async alert=>{
        console.log(alert.type())
        console.log(alert.message())

        expect(alert.message()).toBe("I am an alert box!")
        await alert.accept()
    })

    await page.locator('//button[@id="alertBtn"]').click()

    await page.waitForTimeout(3000)

})

test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog",async alert=>{
        console.log(alert.type())
        console.log(alert.message())

        expect(alert.message()).toBe("Press a button!")
        // await alert.accept()
        await alert.dismiss()
    })

    await page.locator('//button[@id="confirmBtn"]').click()

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(3000)

})

test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog",async alert=>{
        console.log(alert.type());

        // expect(alert.message()).toBe("Please enter your name:")
        expect (alert.message('Please enter your name:'));

        // alert.accept("shalini")
        alert.dismiss("shalini")

    })

    // await page.locator('//button[@id="promptBtn"]').click()
    await page.click('//button[@id="promptBtn"]')

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello shalini! How are you today?")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")

    await page.waitForTimeout(3000)

})