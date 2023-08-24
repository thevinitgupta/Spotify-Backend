const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup",(req,res)=>{
    res.send("Signup");
});

userRouter.post("/login",(req,res)=>{
    res.send("Login");
});

module.exports = userRouter;