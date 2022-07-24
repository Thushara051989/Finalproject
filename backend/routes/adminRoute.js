const express = require('express')
const router = express.Router()
const adminModel=require('../src/model/adminModel')
// const mongoose=require('mongoose')

router.post('/',async(req,res)=>{
   
    console.log('body',req.body);
        try{
            res.header("Access-Control-Allow-Origin","*")
            res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
    
            const adminMod=new adminModel({
                Auser:req.body.Auser,
                Apassword:req.body.Apassword
            })
            await adminMod.save()
    
            res.json({
    
                success:1,
                message:'admin successfuly saved'
    
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
            let allAdmin=await adminModel.find()
            res.json({
                success:1,
                message:'admin listed succesfuly',
                item:allAdmin
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