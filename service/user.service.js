const userModel=require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { sendemail } = require('../emails/user.email');
const { options } = require('joi');
module.exports.register=async(req,res)=>{
    const{name,email,password}=req.body
    const isfound = await userModel.findOne({email});
    if(isfound) return res.json({ mesage: "user is already exesited" })
    
    bcrypt.hash(password, 4, async function(err, hash) {

        await userModel.insertMany({name,email,password:hash});
        const token=jwt.sign({email},"sayed")
        await sendemail({email,token,message:"wafa hana"});
        res.json({message:"Done"});
    });

}
module.exports.login=async(req,res)=>{
    const{email,password}=req.body;
    
    let user=await userModel.findOne({email});
    if(user)
    {
        let validpasword=await bcrypt.compare(password,user.password);
        if(validpasword)
            {
        const token=jwt.sign({userId:user._id,name:user.name,emailConfiram:user.emailConfiram},"sayed")
        if(user.emailConfiram==true)
        { res.json({mesage:"welecom ",token}) }
        else{res.json({mesage:"please verifiy your email "}) }
          
           }
        else{res.json({message:"password is wrong"})}
    }
    else
    {
        res.json({mesage:"User not found pleas register"})
    }

}


module.exports.emailverify=(req,res)=>{
    const{token}=req.params;
    jwt.verify(token,"sayed",async(err,decoded)=>{
        if(err) res.json(err)
            else{
    let user =await userModel.findOne({email:decoded.email});
    if(user)
    {
        await userModel.findOneAndUpdate({email:decoded.email},{emailConfiram:true})
        res.json({message:"verfaid"});}
    }})}
