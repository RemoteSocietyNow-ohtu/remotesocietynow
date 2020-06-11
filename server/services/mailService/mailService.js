const nodemailer = require('nodemailer')
const util = require('util')

let transporter
 
const createTransport = async () => {
  let mailConfig
  if (process.env.NODE_ENV === 'production' ) {
    mailConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    }
  } else {  
    const createTestAccount = util.promisify(nodemailer.createTestAccount)
    const testAccout = await createTestAccount()
    mailConfig = {
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccout.user,
        pass: testAccout.pass
      }
    }
  }
  transporter = nodemailer.createTransport(mailConfig)
}

const sendToAdmin = (address) => {
  const adminMail = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    subject: 'New RemoteSocietyNow-newsletter Subscription',
    html: `${address} wants to join RemoteSocietyNow-newsletter`
  }
  return transporter.sendMail(adminMail)
}

const sendToSubscriber = (address, subject, body) => {
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: address,
    subject: subject,
    html: body
  }  
  return transporter.sendMail(mailOptions)
}

const sendMail = async (address, subject, body) => { 
  await createTransport() 
  const mailToAdmin = await sendToAdmin(address)
  console.log('test message to admin: ', nodemailer.getTestMessageUrl(mailToAdmin))
  const mailToSubscriber = await sendToSubscriber(address, subject, body)
  console.log('test message to subscriber: ', nodemailer.getTestMessageUrl(mailToSubscriber))      
}

module.exports = { sendMail }