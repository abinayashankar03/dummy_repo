import {test,expect} from '@playwright/test'
import * as xlsx  from 'xlsx'

const workbook=xlsx.readFile("D:/EXCEL/saucedemo_cred.xlsx");
const sheet=workbook.Sheets["LOGIN"];
const JsonData=xlsx.utils.sheet_to_json(sheet);

for (let cred of JsonData){

    test(`login swaglabs using excel credentials user ${cred.USERNAME}`,async({page})=>{
        await page.goto("https://www.saucedemo.com/");

        await page.locator('//input[@id="user-name"]').fill(cred.USERNAME.trim());
        await page.locator('//input[@id="password"]').fill(cred.PASSWORD.trim());
        await page.locator('//input[@id="login-button"]').click();

        await page.pause()
    })
}


// [
//     {
//         "S.NO":1,
//         "USERNAME":"standard_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":2,
//         "USERNAME":"problem_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":3,
//         "USERNAME":"performance_glitch_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":4,
//         "USERNAME":"error_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":5,
//         "USERNAME":"visual_user",
//         "PASSWORD":"secret_sauce"
//     }
// ]
