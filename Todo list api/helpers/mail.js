const nodeMailer=require('nodemailer')
require('dotenv').config()

const transporter  = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL,
    pass: process.env.EM_PASS
    }
});
     
//EOD MAIL
exports.sendMail = async (userMail,name,status) => {
    var mailOptions = {
            from: process.env.EMAIL,
            to:userMail,
            subject: 'task ',
            html: `the status for task of ${name} is ${status} `
     }
   
    

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
         console.log(error);
        } 
        else {
        console.log('Email sent: '+ info.response);
        }
        }) }

       
        //OTP MAIL
                exports.userMail = async (userMail,userName,otp) => {
                    var mailOptions = {
                            from: process.env.EMAIL,
                            to:userMail,
                            subject: 'otp ',
                            html: `the otp for user ${userName} is ${otp} `
                     }
                   
                    
                
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                         console.log(error);
                        } 
                        else {
                        console.log('Email sent: ' + info.response);
                        }
                        }) }
                
                        




