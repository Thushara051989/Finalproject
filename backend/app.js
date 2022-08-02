const express = require('express')
const app = express()
const port=process.env.port || 3000
const mongoose=require('mongoose')

mongoose


const adminRouter=require('./routes/adminRoute')
const trainerRouter=require('./routes/trainerRoute')
const studentRouter=require('./routes/studentRoute')
const courseRouter=require('./routes/courseRoute')



const bodyParser=require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())


 mongoose.connect('mongodb+srv://jishnu:5YZ18pPqWACLq8CG@cluster0.otjh9.mongodb.net/lms_db?retryWrites=true&w=majority')
 .then((res)=>{
    console.log('database connected successfuly')

 }).catch((err)=>{
     console.log('error occured while connecting'+err);
 })

app.use('/admin',adminRouter)
app.use('/trainer',trainerRouter)
app.use('/student',studentRouter)
app.use('/course',courseRouter)







app.listen(port,(req,res)=>{
    console.log('listenning to port 3000');
})