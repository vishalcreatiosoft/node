const express = require('express');
const router = new express.Router();
const userControl = require('../controllers/user_control');
const redis = require('redis')
const client = redis.createClient();

router.get('',(req, res)=>{
    res.render('index')
})

router.post('/data',(req, res)=>{
    const data = {
        userName : req.body.userName,
        userCity : req.body.userCity
    }
    //client.setex('userName',3600,JSON.stringify(data))
    userControl.saveUser(data);
})

const getRedisData = async(req, res, next)=>{
    client.get('userData',(err, data)=>{
        if(err){
            throw err;
        }else if(data){
            console.log('redis data is comming...');
            console.log(data);
        }else{
            next();
        }
    })

} 
const getMongodbData = async(req, res)=>{
    const city = req.body.city;
    getName = await userControl.getData(city);
    client.setex('userData',120,JSON.stringify(getName))
    console.log('mongodb data is comming')
    console.log(getName);
}



router.post('/getData',getRedisData, getMongodbData)

module.exports = router;