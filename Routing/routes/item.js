//ye file saare item specific routes ko store krega


const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    res.send('Got a GET Request')
    // res.sendFile('../dummy.html',{root:__dirname})
})

router.post('/items',(req,res) =>{
    // res.send('Got a POST Requests')
    res.json({x:1, y:2, z:3})
})

router.put('/items/:id',(req,res) =>{
    res.send('Got a PUT Requests')
})

router.delete('/items/:id', (req,res) =>{
    res.send('Got a DELETE Requests')
})

module.exports = router