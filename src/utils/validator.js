const { version : uuidVersion, validate : uuidValidate } = require('uuid');
const validateUUID = (id)=>{
    return uuidValidate(id) && uuidVersion(id)===5;
}

module.exports = {
    validateUUID
}