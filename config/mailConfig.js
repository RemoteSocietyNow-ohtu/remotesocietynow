const config = require('../config/common')

const CONTACT_MAIL = 'remotesocietynow@protonmail.com'

const productionMailConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: config.mailUsername,
    pass: config.mailPassword
  }
}

module.exports = { productionMailConfig, CONTACT_MAIL }