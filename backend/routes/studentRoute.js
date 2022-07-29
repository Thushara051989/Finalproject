const express = require('express')
const router = express.Router()
const studentModel=require('../src/model/studentModel')
const bcrypt=require('bcrypt')


router.post('/',(req,res)=>{
   
    console.log('body',req.body);
        
            res.header("Access-Control-Allow-Origin","*")
            res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")

            bcrypt.hash(req.body.data.password,10,(err,hash)=>{
                if (err){
                    return res.json({
    
                        success:0,
                        message:'Hashing iss'
            
                    })
                }
                else{
                    const studentMod=new studentModel({
                        firstname:req.body.data.firstname,
                        lastname:req.body.data.lastname,
                        course:req.body.data.course,
                        email:req.body.data.email,
                        password:hash
                    })
                     studentMod.save()
                    .then((_)=>{
                        res.json({
                
                            success:1,
                            message:'student Account create successfully'
                
                        })
                    })
                    .catch((err)=>{
                        if(err.code === 11000){
                            return res.json({
                                success:0,
                                message:'Email Already Exists' 
                            })
                        }
                        res.json({
                            success:0,
                            message:'Auth Failed'
                        })
                
                    })






                }
            })

            
            
            
    
        
        
    })
    
    
    router.get('/',async(req,res)=>{
       
        try{
            res.header("Access-Control-Allow-Origin","*")
            res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
            let allstudent=await studentModel.find()
            res.json({
                success:1,
                message:'student listed succesfuly',
                item:allstudent
            })
        }
        catch(err){
            res.json({
            success:0,
            message:'error occured while testing'+err
            })
        }
    })


    module.exports=router