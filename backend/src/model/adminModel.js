const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    Auser:String,
    Apassword:String
})

const adminModel=mongoose.model('admin',adminSchema)

module.exports=adminModel