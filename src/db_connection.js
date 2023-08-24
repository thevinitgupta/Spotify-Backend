const mongoose = require("mongoose");
require('dotenv').config()

const connectMongoDB = async() =>{
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    try{
        await mongoose.connect(`mongodb+srv://${username}:${password}@spotify.8djxsus.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        console.log("MongoDB connection established");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {connectMongoDB};