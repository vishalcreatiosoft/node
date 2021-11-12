const express = require('express')
const router = new express.Router()

router.get('',(req, res)=>{
    res.render('index')
})

router.post('/send', (req, res) => {
    
    const msg = req.form.message
    console.log(msg)
    res.send('hii')
})


module.exports = router