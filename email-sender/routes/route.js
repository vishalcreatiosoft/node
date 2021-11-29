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
    //console.log(loginResult);
    if(loginResult == 0){
        res.send('Invalid Credentials');
    }
    if(loginResult != 0){
        const username = loginResult[0].name;
        const findMyEmails = await Email.findEmails(email);
        //console.log(findMyEmails[0].email);
        if(findMyEmails != 0){
            loggedInUser.push(email);  
            //console.log(findMyEmails);
            findMyEmails.forEach(element => {
                emailArray.push({sender : element.sender, content : element.content});
            });
            
            //console.log(emailArray);
            
            res.render('home',{name : username});
        }else{
            
            loggedInUser.push(email);
            res.render('home',{name : username});
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
   
    //saving email send by logged in user in db.
    Email.sendEmail(emailData);


    
})


router.post('/receivedEmails', (req, res)=>{
    
    //console.log(emailArray);
    const data = JSON.stringify(emailArray);
    //console.log(data);        
    res.render('myemail',{data : data});

})

router.post('/sentEmails', async(req, res)=>{

    //console.log(loggedInUser[0]);
    const getEmails = await Email.sentEmails(loggedInUser[0]);
    if(getEmails != 0){

        const sents = JSON.stringify(getEmails);
        console.log(sents);
        res.render('sentEmail',{data : sents});
    }else{
        res.render('sentEmail',{data : 'null'});
    }

    
})













module.exports = router;