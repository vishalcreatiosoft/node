const express = require('express')
const router = new express.Router()

router.get('',(req, res)=>{
    res.send('welcome to the sockect.io')
})


module.exports = router