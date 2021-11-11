const express = require('express')
const { model } = require('mongoose')
const multer = require('multer')
const router = new express.Router()
const Registration = require('../controllers/registration-control')
const path = require('path')
const { updateData } = require('../controllers/registration-control')

router.use(express.static(__dirname+"./public/"))

router.get('',(req, res)=>{
    res.render('login')
})

router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/index',(req, res)=>{
    res.render('index')
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
        //console.log(userExist)
        res.render('home',{info : userExist})
    }
})

router.post('/logout',(req, res)=>{
    res.render('login')
})

router.post('/update',(req, res)=>{
    res.render('updateProfile')
})

router.post('/updateProfile',async(req, res)=>{
   
    const userData = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        company : req.body.company,
        city : req.body.city
    
    }

    const data = await Registration.updateData(userData)  
    if(data == 0)
    {
        res.send('No data is provided for updation')
    }
    else{
        
        const updatedData = JSON.stringify(data)
        res.render('login')
        //console.log(updatedData)
        //res.render('home',{informantion: updatedData})
    }
 
})

router.post('/post', async(req, res)=>{

    postMessage = {
        postmsg : req.body.postdata
    }
   
    Registration.postData(postMessage)

})

router.get('/showPost', async(req, res)=>{

    const getData = await Registration.getPostData()
    const data = JSON.stringify(getData)
    //console.log(data)
    res.render('posts',{posts : data})
})


module.exports = router