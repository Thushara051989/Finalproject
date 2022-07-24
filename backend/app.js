const express = require('express')
const app = new express()




app.get('',(req,res)=>{
    res.send('Backend SERver LMS')
})





app.listen(5000,(()=>{
    console.log('Server Running In port 5000');
}))