const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jishnu:5YZ18pPqWACLq8CG@cluster0.otjh9.mongodb.net/lms_db?retryWrites=true&w=majority')
.then((res)=>{
    // console.log('database connected successfuly')

}).catch((err)=>{
    console.log('error occured while connecting'+err);
})

const trainerSchema = new mongoose.Schema({

    Auser:String,
    Apassword:String
})

const trainerModel=mongoose.model('trainer',trainerSchema)

module.exports=trainerModel