const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
})

const UserModel = mongoose.model('user',userSchema)

module.exports = {UserModel}