const User =  require("../model/user.js");
const {validateUUID} = require("../utils/validator.js")
module.exports = {
    getByID : async (req,res)=>{
        const {userId} = req?.params;
        if(!userId){
            return res.status(400).json({
                message : "User ID not present"
            });
        }
        if(!validateUUID(userId)){
            return res.status(400).json({
                message : "Invalid User ID"
            });
        }
        console.log(userId)
        try {
            const user = await User.findOne({userId});
            if(!user){
                return res.status(404).json({
                    message : `User with id ${userId} does not exist`,
                    data : null
                    });
            }
            else {
                console.log(user);
                res.status(200).json({
                    message : "User found",
                    data : user
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message : "Internal server error",
                data : null
            });
        }
    }
}