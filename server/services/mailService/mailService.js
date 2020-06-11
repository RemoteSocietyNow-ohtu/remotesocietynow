const nodemailer = require('nodemailer')

const sendMail = async (address, subject, body) => {
  let transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  var mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: address,
    subject: subject,
    html: body
  }
  
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })  
  
}

module.exports = { sendMail }