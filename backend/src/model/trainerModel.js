const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema({

    Auser:String,
    Apassword:String
})

const trainerModel=mongoose.model('trainer',trainerSchema)

module.exports=trainerModel