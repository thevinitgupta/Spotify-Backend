const { Schema } = require("mongoose");

const PlanSchema = new Schema({
    user : {
        required : true,
        type : string,
        ref : 'User'
    },
    plan : {
       type : string,
       enum : ['basic', 'premium', 'family'],
       default : 'basic'
    },
    expiry : {
        type : Date,
        default : null,
        required : true
    }
},{
    timestamps : true
})