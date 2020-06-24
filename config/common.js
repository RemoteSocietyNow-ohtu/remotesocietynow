
/**
 * Insert application wide common items here, they're all exported by frontend and backend common.js respectively
 */

const inProduction = process.env.NODE_ENV === 'production'
const mongoDbUrl = process.env.MONGODB_URI
const mongoDbDevUrl = process.env.MONGODB_DEV_URI
const mailUsername = process.env.MAIL_USERNAME
const mailPassword = process.env.MAIL_PASSWORD
const secret = process.env.SECRET
const adminPassword = process.env.ADMINPASSWORD


module.exports = {
  inProduction,
  mongoDbUrl,
  mongoDbDevUrl,
  mailUsername,
  mailPassword,
  secret,
  adminPassword
}
