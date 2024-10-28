
const jwt=require('jsonwebtoken')

module.exports.auth=async(req,res,next)=>{
    let token=req.header('token')
jwt.verify(token,"sayed",(err,decoded)=>{
    if(err) res.json(err)
        else{
    req.id=decoded.userId;
    next()
}
})
}