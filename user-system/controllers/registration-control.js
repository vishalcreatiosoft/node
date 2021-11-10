const Registration = require('../models/registration-model')


const userRegistrtion = {}

userRegistrtion.saveRegistration = async(userData)=>{
    try{
        const register = new Registration(userData)
        const saveData = await register.save() 

    }catch(e){
        console.log('Registration failed',e)
    }
}

userRegistrtion.userLogin = async(email, password)=>{
    try{
        const checkUser = await Registration.find({email : email, password : password})
        if(checkUser.length == 0){
            return 0
        }
        else{
            return checkUser
        }
        

    }catch(e){
        console.log('Invalid Credentials',e)
    }
}


module.exports = userRegistrtion