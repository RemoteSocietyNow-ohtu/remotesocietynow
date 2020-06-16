const CONTACT_MAIL = 'remotesocietynow@protonmail.com'

const productionMailConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
}

module.exports = { productionMailConfig, CONTACT_MAIL }