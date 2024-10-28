const { userValid } = require("../middleware/vaildation/user.val");
const { register,login, emailverify } = require("../service/user.service");
const Router =require("express").Router();
//login
//Router.get('/register',(req,res)=>{res.json("ssssssss")})
Router.post('/register',register)
Router.post('/login',login)
Router.get('/emailverify/:token',emailverify);

module.exports=Router

