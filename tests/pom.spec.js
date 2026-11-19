import {test,expect} from '@playwright/test'
import Orange from '../pages/Ohrm'
import cred from '../test-data/hrm.json'

test("login using pom pattern",async({page})=>{

    let hrm=new Orange(page)

    await hrm.navigation()
    await hrm.login(cred.username,cred.password)

    await page.pause()
})