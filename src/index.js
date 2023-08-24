const express = require("express");
const jwt = require("jsonwebtoken");
const { connectMongoDB } = require("./db_connection");
const userRouter = require("./routes/user");
const mongoose = require("mongoose")
const app = express();

require('dotenv').config()

app.use("/user", userRouter);

app.get('/', (req,res)=>{
    res.json({
        message : "Hello world"
    });
})

connectMongoDB();
const db = mongoose.connection;
db.on("error", () => {
    console.log( "connection error: ")
});

db.once("open", function () {
  console.log("Connected successfully");
  app.listen(5000, ()=>{
    console.log("App running on Port : ",5000);
    })
});
