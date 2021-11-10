const express = require('express')
const { model } = require('mongoose')
const multer = require('multer')
const router = new express.Router()
const Registration = require('../controllers/registration-control')
const path = require('path')

router.use(express.static(__dirname+"./public/"))

router.get('',(req, res)=>{
    res.render('index')
})

router.get('/login',(req, res)=>{
    res.render('login')
})

const storage = multer.diskStorage({
    destination : "./public/uploads",
    filename : (req, file, cb)=>{
        
        cb(null, file.filename+"_"+Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage }).single('file')

router.post('/registration',upload, (req, res)=>{
    const newUserData = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        company : req.body.company,
        city : req.body.city,
        password : req.body.password,
        confirmpassword : req.body.confirmpassword,
        image : req.file.filename
    }

    Registration.saveRegistration(newUserData)
   
})

router.post('/login',async(req, res)=>{
    
    email = req.body.email,
    password = req.body.password
    const data = await Registration.userLogin(email, password)
    if(data == 0){
        res.send('Invalid Credentials')
    }
    else{
        const userExist = JSON.stringify(data)
        res.render('home',{info : userExist})
    }
})

router.post('/logout',(req, res)=>{
    res.render('login')
})


module.exports = router