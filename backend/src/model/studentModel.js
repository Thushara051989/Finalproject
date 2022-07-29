const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    Sfirstname:{type:String},
    Slastname:{type:String},
    Scourse:{type:String},
    Semail:{type:String, unique:true},
    Spassword:{type:String}
})

const studentModel=mongoose.model('student',studentSchema)

module.exports=studentModel