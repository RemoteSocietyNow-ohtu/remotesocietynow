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

const sendMail = async (mailOptions) => {
  await createTransport()
  const sentMail = await transporter.sendMail(mailOptions)
  if (process.env.NODE_ENV !== 'production')
    console.log('test message: ', nodemailer.getTestMessageUrl(sentMail))
  return sentMail
}

module.exports = { sendMail }