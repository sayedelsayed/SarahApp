const mongoose = require('mongoose');
const messageSchema=mongoose.Schema({
    message:String,
    userId:mongoose.SchemaTypes.ObjectId,
})

module.exports=mongoose.model('message',messageSchema);