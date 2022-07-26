const express = require('express')
const router = express.Router()
const studentModel=require('../src/model/studentModel')


router.post('/',async(req,res)=>{
   
    console.log('body',req.body);
        try{
            res.header("Access-Control-Allow-Origin","*")
            res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
    
            const studentMod=new studentModel({
                Sfirstname:req.body.Sfirstname,
                Slastname:req.body.Slastname,
                Scourse:req.body.Scourse,
                Semail:req.body.Semail,
                Spassword:req.body.Spassword
            })
            await studentMod.save()
    
            res.json({
    
                success:1,
                message:'student successfuly saved'
    
            })
    
        }
        catch(err){
            res.json({
                success:0,
                message:'error occuured while saving'+err
            })
    
        }
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