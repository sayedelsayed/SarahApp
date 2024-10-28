const mongoose= require('mongoose');
const messageModel=require('../models/message.model')


module.exports.AddMes=async(req,res)=>{
    const{message,userId}=req.body
    await messageModel.insertMany({message,userId})
 res.json({message:"Done"})
}

module.exports.getAll=async(req,res)=>{
   // const {userId}=req.body;
   let mesage= await messageModel.find({userId:req.id},{message:1,_id:0});
    res.json({mesage:"Done ",mesage})

}