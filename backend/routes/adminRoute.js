const express = require('express')
const router = express.Router()
const adminModel = require('../src/model/adminModel')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const checkAuth=require('../middleware/check_auth')


router.post('/signUp',(req, res) => {

    console.log('body', req.body);

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.json({

                success: 0,
                message: 'Hashing iss'

            })
        }
        else {
            const adminMod = new adminModel({
                email:req.body.email,
                password: hash
            })
            adminMod.save()
                .then((_) => {
                    res.json({

                        success: 1,
                        message: ' Account created successfully'

                    })
                })
                .catch((err) => {
                    if (err.code === 11000) {
                        return res.json({
                            success: 0,
                            message: 'Account already Exist,Please login'
                        })
                    }
                    res.json({
                        success: 0,
                        message: 'Auth Failed'
                    })

                })

        }
    })
})


router.get('/', async (req, res) => {

    try {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
        let allstudent = await studentModel.find()
        res.json({
            success: 1,
            message: 'student listed succesfuly',
            item: allstudent
        })
    }
    catch (err) {
        res.json({
            success: 0,
            message: 'error occured while testing' + err
        })
    }
})


// router.post('/login', (req, res) => {

//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")


//     studentModel.find({ email: req.body.data.email })
//         .exec()
//         .then((result) => {
//             if (result.length < 1) {
//                 return res.json({
//                     success: 0,
//                     message: 'Account doesnt exist'
//                 })
//             }
//             const user = result[0]
//             bcrypt.compare(req.body.data.password, user.password, (err, ret) => {
//                 if (ret) {
//                     const payload = {
//                         userId: user._id
//                     }
//                     const token = jwt.sign(payload, 'webBatch')
//                     return res.json({
//                         success: 1,
//                         token: token,
//                         message: 'login Successfull'
//                     })
//                 }
//                 else {
//                     return res.json({
//                         success: 0,
//                         message: 'password do not Match'
//                     })


//                 }


//             })
//         })
//         .catch((err) => {
//             res.json({
//                 success: 0,
//                 message: 'Auth failed'
//             })
//         })
// })

//  router.get('/profile',checkAuth,(req,res)=>{

//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")

//     const userId=req.userData.userId
//     studentModel.findById(userId)
//     .exec()
//     .then((result)=>{
//         res.json({
//             success:1,
//             data:result
//         })
//     })
//     .catch(err=>{
//         res.json({
//             success:0,
//             message:'server error'
//         })
//     })


 
// })


module.exports = router