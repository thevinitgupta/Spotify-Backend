const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get('/', (req,res)=>{
    res.json({
        message : "Hello world"
    });
})

app.listen(5000, ()=>{
    console.log("App running on Port : ",5000);
})