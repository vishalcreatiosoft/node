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

module.exports = userRegistrtion