const express = require('express')
const { model } = require('mongoose')
const router = new express.Router()
const Registration = require('../controllers/registration-control')

router.get('',(req, res)=>{
    res.render('index')
})

router.get('/login',(req, res)=>{
    res.render('login')
})
router.post('/registration',(req, res)=>{
    const newUserData = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        company : req.body.company,
        city : req.body.city,
        password : req.body.password,
        confirmpassword : req.body.confirmpassword
    }

    Registration.saveRegistration(newUserData)
   
})



module.exports = router