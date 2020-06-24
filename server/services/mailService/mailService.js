const { inProduction } = require('../../../config/common')
const nodemailer = require('nodemailer')
const util = require('util')
const mailConfig = require('../../../config/mailConfig')

let transporter
 
const createTransport = async () => {
  let config
  if (inProduction) {
    config = mailConfig.productionMailConfig
  } else {  
    const createTestAccount = util.promisify(nodemailer.createTestAccount)
    const testAccout = await createTestAccount()
    config = {
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccout.user,
        pass: testAccout.pass
      }
    }
  }
  transporter = nodemailer.createTransport(config)
}

const sendMail = async (mailOptions) => {
  await createTransport()
  const sentMail = await transporter.sendMail(mailOptions)
  if (!inProduction)
    console.log('test message: ', nodemailer.getTestMessageUrl(sentMail))
  return sentMail
}

module.exports = { sendMail }