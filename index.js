const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    console.log("home page");
})

app.listen(3500,()=>{
    console.log(`server is running on port 3500`);
})