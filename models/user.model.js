const mongoose=require('mongoose');
const { type } = require('os');
const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,requireed:"true",
    unique: [true, 'email already exists']},
    password:String,
    emailConfiram:{
        type:Boolean ,
        default:false
    }

})
module.exports=mongoose.model('user',userSchema);