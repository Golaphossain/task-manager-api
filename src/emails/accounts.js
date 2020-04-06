const sgMail=require('@sendgrid/mail')
const sendgridapikey='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'
sgMail.setApiKey(sendgridapikey)

// sgMail.send({
//     to:'hossain6857@gmail.com',
//     from:'hossain6857@gmail.com',
//     subject:'this is my first app',
//     text:'I hope this one actually get to you'
// })
const sendWelcomeEmail=(email,name)=>{
    console.log(email,name)
    sgMail.send({
        to:email,
        from:'hossain6857@gmail.com',
        subject:'thanks for joining our application!',
        text:`welcome to the app,${name}. let me know how you get along with the app`
    })
}
const sendCancelationEmail=(email,name)=>{
    console.log(email,name)
    sgMail.send({
        to:email,
        from:'hossain6857@gmail.com',
        subject:'Sorry to see you go!   ',
        text:`Goodbye! ${name}. I hope to see you back sometime soon`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}