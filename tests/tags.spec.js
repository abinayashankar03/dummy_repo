import {test,expect} from '@playwright/test'

test("test one @reg",async()=>{
    console.log("test one executed successfully"); 
})

test("test two @reg",async()=>{
    console.log("test two executed successfully"); 
})

test("test three @reg",async()=>{
    console.log("test three executed successfully"); 
})

test("test four @reg @smoke",async()=>{
    console.log("test four executed successfully"); 
})

test("test five @smoke",async()=>{
    console.log("test five executed successfully"); 
})

test("test six @smoke",async()=>{
    console.log("test six executed successfully"); 
})

test("test seven @sanity @reg",async()=>{
    console.log("test seven executed successfully"); 
})

test("test eight @sanity",async()=>{
    console.log("test eight executed successfully"); 
})