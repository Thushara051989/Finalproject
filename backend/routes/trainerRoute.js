const express = require('express')
const router = express.Router()
const trainerModel=require('../src/model/trainerModel')
// const mongoose=require('mongoose')

router.post('/',async(req,res)=>{
   
    console.log('body',req.body);
        try{
            res.header("Access-Control-Allow-Origin","*")
            res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
    
            const trainerMod=new trainerModel({
                Auser:req.body.Auser,
                Apassword:req.body.Apassword
            })
            await trainerMod.save()
    
            res.json({
    
                success:1,
                message:'trainer successfuly saved'
    
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
            let alltrainer=await trainerModel.find()
            res.json({
                success:1,
                message:'trainer listed succesfuly',
                item:alltrainer
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