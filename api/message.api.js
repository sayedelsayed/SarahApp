const { auth } = require("../middleware/auth/auth");
const { getAll,AddMes } = require("../service/message.service");
const Router =require("express").Router();
//login
//Router.get('/register',(req,res)=>{res.json("ssssssss")})
Router.post('/add',AddMes)
Router.get('/all',auth,getAll)
//register

module.exports=Router

