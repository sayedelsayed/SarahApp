const { error } = require('console')
const joi = require('joi')
const methods=['param','body'];
//const userSchema=
const para=joi.object({
    id:joi.string()
})

let schema= {
    body:joi.object({
        name:joi.string().min(3).max(12),
        email:joi.string().required().email(),
        password:joi.string(),
        repeatpassword:joi.ref('password'),
        
    })
,params:joi.object({id:joi.string().min(4).max(4)})
}



module.exports.userValid=(req,res,next)=>{
    const msgArray=[]
   methods.map((key)=>{
    const {error} = schema[key].validate(req[key],{abortEarly:false})
    if(error){ 
        error.details.map((msg)=>{
            msgArray.push(msg.message)
        })
  }
  })
  if( msgArray.length===0){next();}
  else{  res.json(errorArray)}
}