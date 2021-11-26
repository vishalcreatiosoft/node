const Register = require('../models/registration-model');

const users = {}

users.saveUser = async(userData)=>{
    try{
        const register = new Register(userData);
        const save = register.save();
    }catch(e){
        console.log('unable to save user',e);
    }
}



users.loginUser = async(email, password)=>{
    try{
        const loginResult = await Register.find({email : email, password : password})
        if(loginResult.length == 0){
            return 0
        }else{
            return loginResult;
        }
    }catch(e){
        console.log('unable to login user',e);
    }
}

module.exports = users;