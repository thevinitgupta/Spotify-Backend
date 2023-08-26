const express = require("express");
const user = require("../controllers/user");
const userRouter = express.Router();

userRouter.get("/",user.getByID)
userRouter.get("/:userId",user.getByID)
userRouter.post("/signup",(req,res)=>{
    res.send("Signup");
});

userRouter.post("/login",(req,res)=>{
    res.send("Login");
});

module.exports = userRouter;