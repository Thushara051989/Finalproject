const express = require('express')
const app = express()
const port=process.env.port || 3000
const mongoose=require('mongoose')
const nodemailer=require('nodemailer')

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


app.post('/sendstdmail',(req,res)=>{
    console.log('request came');
    let userstd=req.body

    sendMail(userstd,info=>{
        console.log(`The mail has been send and the id is ${info.messageId}`)
        res.send(info)
    })
})

async function sendMail(userstd,callback){
    let transporter=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'jishnupunathil000@gmail.com',
            pass:'onoomagdjflksnuz'

        }
    })

    let mailOptions={
        from:'GURUKUL Adminstrator',
        to:userstd.email,
        subject:'Registration Successfull',
        html:`<h2>Dear ${userstd.firstname} ${userstd.lastname},</h2><br>
        <h4>Thank You for registering in Gurukul. For accessing your course kindly login to the students section.</h4><br><br>
        <h3> Thank you from ICTAK`
    }

    let info=await transporter.sendMail(mailOptions)

    callback(info)
}



app.post('/trainermail',(req,res)=>{
    console.log('request came');
    let user=req.body

    sendMail(user,info=>{
        console.log(`The mail has been send and the id is ${info.messageId}`)
        res.send(info)
    })
})

async function sendMail(user,callback){
    let transporter=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'jishnupunathil000@gmail.com',
            pass:'lgyhyqrrvxkkwder'

        }
    })

    let mailOptions={
        from:'GURUKUL Adminstrator',
        to:user.email,
        subject:'Trainer login details',
        html:`<h2>Dear ${user.firstname} ${user.lastname},</h2><br>
        <h4> kindly login as a trainer with the credential listed below</h4>
        <h3>UserEmail: ${user.email}</h3>
        <h3>password: ${user.password}</h3><br><br>
        <h3> Thank you from ICTAK`
    }

    let info=await transporter.sendMail(mailOptions)

    callback(info)
}






app.listen(port,(req,res)=>{
    console.log('listenning to port 3000');
})