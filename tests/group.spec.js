import {test,expect} from '@playwright/test'

test.describe("personal",()=>{

    test("name and address",async()=>{
        console.log("name and address details"); 
    })

    test("aadhar @reg",async()=>{
        console.log("aadhar details"); 
    })

    test("pan",async()=>{
        console.log("pan details"); 
    })

})

test.describe("other",()=>{

    test("education @reg",async()=>{
        console.log("education details"); 
    })

    test("experience",async()=>{
        console.log("experience details"); 
    })

    test("bank",async()=>{
        console.log("bank details"); 
    })

    test("pf @reg",async()=>{
        console.log("pf details"); 
    })

    test("agreement",async()=>{
        console.log("agreement details"); 
    })

})



