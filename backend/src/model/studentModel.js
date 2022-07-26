const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jishnu:5YZ18pPqWACLq8CG@cluster0.otjh9.mongodb.net/lms_db?retryWrites=true&w=majority')
.then((res)=>{
    // console.log('database connected successfuly')

}).catch((err)=>{
    console.log('error occured while connecting'+err);
})

const studentSchema = new mongoose.Schema({

    Sfirstname:String,
    Slastname:String,
    Scourse:String,
    Semail:String,
    Spassword:String
})

const studentModel=mongoose.model('student',studentSchema)

module.exports=studentModel