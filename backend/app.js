const express = require('express')
const app = express()
const adminRouter=require('./routes/adminRoute')
const trainerRouter=require('./routes/trainerRoute')
const studentRouter=require('./routes/studentRoute')


const bodyParser=require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.use('/admin',adminRouter)
app.use('/trainer',trainerRouter)
app.use('/student',studentRouter)






app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log('listenning to port 3000');
})