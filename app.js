const express=require('express')
const app= express();
const port = 3000;
const userRouter=require('./api/user.api')
const messageRouter=require('./api/message.api')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sarahApp', )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/user',userRouter)
app.use('/message',messageRouter)
app.get('/',(req,res)=>{
    res.json("welcom ya deep");
})
app.listen(port,()=>{
    console.log("server already run on 3000")
}
)