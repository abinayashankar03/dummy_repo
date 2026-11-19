import {test,expect, chromium} from '@playwright/test'

test("tabs handling",async()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();
    const pageOne=await context.newPage();

    await pageOne.goto("https://testautomationpractice.blogspot.com/")

    console.log(await pageOne.title());
    await pageOne.waitForTimeout(5000);

    const pageTwo=await context.newPage();

    await pageTwo.goto("https://www.facebook.com/")

    console.log(await pageTwo.title());
    await pageTwo.waitForTimeout(5000);
    

})

test("handling multiple tabs",async({browser})=>{  //browser | context | page

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    console.log(await page.title());

    await page.locator('//input[@name="username"]').fill("admin");

    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])

    await newTab.waitForLoadState();

    console.log(await newTab.title());
    await newTab.locator('//button[text()="Book a Free Demo"]').click()

    await newTab.pause()

})

test("page navigation",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");  
    await page.getByRole("button",{name:" Logn "}).click();    

    await page.waitForTimeout(5000);

    await page.goBack();

    await page.waitForTimeout(5000);

    await page.goForward();

    await page.waitForTimeout(5000);

    await page.reload();

    await page.waitForTimeout(5000);

    

})



