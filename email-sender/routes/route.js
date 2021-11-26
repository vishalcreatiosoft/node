const express = require('express');
const router = new express.Router();
const Register = require('../controllers/registration-control');
const Email = require('../controllers/email-control');
emailArray = [];
loggedInUser = [];

router.get('',(req, res)=>{
    res.render('index');
})

router.get('/index',(req, res)=>{
    res.render('index');
})

router.get('/register',(req, res)=>{
    res.render('register');
})

router.post('/register',(req, res)=>{
    const userData = {
        name : req.body.username,
        email : req.body.email,
        password : req.body.password
    }

    Register.saveUser(userData);
    
})


router.post('/login',async(req, res)=>{
    
    const email = req.body.email;
    const password = req.body.password;
    const loginResult = await Register.loginUser(email,password);

    if(loginResult == 0){
        res.send('Invalid Credentials');
    }
    if(loginResult != 0){

        const findMyEmails = await Email.findEmails(email);
        //console.log(findMyEmails[0].email);
        if(findMyEmails != 0){
            loggedInUser.push(email);            
            emailArray.push({sender : findMyEmails[0].sender, content : findMyEmails[0].content});
            //console.log(emailArray);
            res.render('home');
        }else{
            
            loggedInUser.push(email);
            res.render('home');
        }
        
    }
})

router.post('/logout',(req, res)=>{
    loggedInUser.pop();
    emailArray.pop();
    res.render('index');
})


router.post('/sendEmail',(req, res)=>{


    const emailData = {
        sender : loggedInUser[0],
        email : req.body.email,
        content : req.body.content
    }
    //console.log(loggedInUser[0]);
    Email.sendEmail(emailData);
   
    
})


router.post('/receivedEmails', (req, res)=>{
    
    //console.log(emailArray);
    const data = JSON.stringify(emailArray);
    console.log(data);        
    res.render('myemail',{data : data});


})













module.exports = router;