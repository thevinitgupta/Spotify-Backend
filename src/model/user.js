const { Schema, default: mongoose } = require("mongoose");
const {validateUUID} = require("../utils/validator")

const UserSchema = new Schema({
    userId : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : validateUUID,
            message : "Invalid UserID, please provide a UUIDv5 ID"
        }
    },
    email : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    authentication : {
        password : {
            type : String,
            required : true,
            select : false 
        },
        salt : {
            type : String,
            select : false 
        },
        sessionToken : {
            type : String,
            select : false 
        },
    },
    
}, {
    timestamps : true,
    _id : false
});

module.exports = mongoose.model("User", UserSchema);