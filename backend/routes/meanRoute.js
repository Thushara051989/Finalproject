const express = require('express')
const router = express.Router()
const meanModel = require('../src/model/meanModel')
// const mongoose = require('mongoose')



router.post('/add', async (req, res) => {

    console.log('body', req.body);
    try {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")

        const meanMod = new meanModel({

            head: req.body.data.head,
            subhead: req.body.data.subhead,
            paragraph: req.body.data.paragraph,
            title: req.body.data.title,
            url: req.body.data.title
        })
        await meanMod.save()

        res.json({

            success: 1,
            message: 'mean about successfuly saved'

        })

    }
    catch (err) {
        res.json({
            success: 0,
            message: 'error occuured while saving' + err
        })

    }
})


router.get('/', async (req, res) => {

    try {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
        let allmean = await meanModel.find()
        res.json({
            success: 1,
            message: 'mean listed succesfuly',
            item: allmean
        })
    }
    catch (err) {
        res.json({
            success: 0,
            message: 'error occured while testing' + err
        })
    }
})





module.exports = router