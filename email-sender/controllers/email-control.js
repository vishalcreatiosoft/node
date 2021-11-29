const Email = require('../models/email-model');
const emails = {};



emails.sendEmail = async(emailData)=>{
    try{
        const email = new Email(emailData);
        const saveEmail = await email.save();

    }catch(e){
        console.log('Unable to send email',e);
    }
}

emails.findEmails = async(email)=> {
    try{
        // console.log(email);
        const userEmailData = Email.find({email : email})
        if(userEmailData.length != 0){
            return userEmailData;
        }
    }catch(e){
        console.log('unable to find emails',e);
    }
}

emails.sentEmails = async(email)=>{
    try{
        const getEmails = await Email.find({sender : email})
        if(getEmails.length != 0){
            return getEmails;
        }
        else{
            return 0;
        }
    }catch(e){
        console.log('unable to get send Emails',e)
    }
}




module.exports = emails;