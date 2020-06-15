const newsletterRouter = require('express').Router()
const newsletterWelcomeMessage = require('../services/newsletterTemplates/newsletterWelcomeMessage')
const mailService = require('../services/mailService/mailService')

const prepareAdminMail = (address) => {  
  return {
    from: process.env.MAIL_USERNAME,
    to: address,
    subject: newsletterWelcomeMessage.subject,
    html: newsletterWelcomeMessage.body
  }
}

const prepareSubscriberMail = (address) => {
  return {
    from: process.env.MAIL_USERNAME,
    to: process.env.CONTACT_MAIL,
    subject: 'New RemoteSocietyNow-newsletter Subscription',
    text: `${address} wants to join RemoteSocietyNow-newsletter`
  }
}

newsletterRouter.post('/', async (req, res) => {
  const address = req.body.address
  try { 
    await mailService.sendMail(prepareSubscriberMail(address))
    await mailService.sendMail(prepareAdminMail(address))    
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(400)
  }
})

module.exports = newsletterRouter