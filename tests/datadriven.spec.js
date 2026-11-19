import {test,expect} from '@playwright/test'
import cred from '../test-data/hrm.json'

test("login using built-in-locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill(cred.username);
    await page.getByPlaceholder("Password").fill(cred.password);

    await page.getByRole("button",{name:" Login "}).click()

    await page.pause()

})