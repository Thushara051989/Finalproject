const express = require('express')
const router = express.Router()
const trainerModel = require('../src/model/trainerModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth=require('../middleware/check_trnAuth')


router.post('/signUp', (req, res) => {

    console.log('body', req.body);

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")

    bcrypt.hash(req.body.data.password, 10, (err, hash) => {
        if (err) {
            return res.json({

                success: 0,
                message: 'Hashing issue'

            })
        }
        else {
            const trainerMod = new trainerModel({
                firstname: req.body.data.firstname,
                lastname: req.body.data.lastname,
                course: req.body.data.course,
                email: req.body.data.email,
                password: hash
            })
            trainerMod.save()
                .then((_) => {
                    res.json({

                        success: 1,
                        message: 'Trainer Account create successfully'

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
        let alltrainer = await trainerModel.find()
        res.json({
            success: 1,
            message: 'student listed succesfuly',
            item: alltrainer
        })
    }
    catch (err) {
        res.json({
            success: 0,
            message: 'error occured while testing' + err
        })
    }
})


router.post('/login', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")


    trainerModel.find({ email: req.body.data.email })
        .exec()
        .then((result) => {
            if (result.length < 1) {
                return res.json({
                    success: 0,
                    message: 'Account doesnt exist'
                })
            }
            const user = result[0]
            bcrypt.compare(req.body.data.password, user.password, (err, ret) => {
                if (ret) {
                    const payload = {
                        userId: user._id
                    }
                    const token = jwt.sign(payload, 'secretKey')
                    return res.json({
                        success: 1,
                        token: token,
                        message: 'login Successfull'
                    })
                }
                else {
                    return res.json({
                        success: 0,
                        message: ' wrong password '
                    })


                }


            })
        })
        .catch((err) => {
            res.json({
                success: 0,
                message: 'Auth failed'
            })
        })
})

 router.get('/profile',checkAuth,(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")

    const userId=req.userData.userId
    trainerModel.findById(userId)
    .exec()
    .then((result)=>{
        res.json({
            success:1,
            data:result
        })
    })
    .catch(err=>{
        res.json({
            success:0,
            message:'server error'
        })
    })

    router.delete('/:id',async (req,res)=>{
        let id=req.params.id
    
        let validId=mongoose.Types.ObjectId.isValid(id)
        if (validId){
            try{
                await trainerModel.deleteOne({_id:id})
                res.json({
                    success:1,
                    message:'Trainer deleted successsfully'
                })
            }
            catch(err){
    
                res.json({
                    success:0,
                    message:'error occured while deleting'+err
                })
    
            }
        }
    })
 

})


module.exports = router