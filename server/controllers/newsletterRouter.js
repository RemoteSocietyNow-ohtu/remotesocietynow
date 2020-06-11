const newsletterRouter = require('express').Router()
//const ProtonMail = require('protonmail-api')
const newsletterWelcomeMessage = require('../services/newsletterTemplates/newsletterWelcomeMessage')
const mailService = require('../services/mailService/mailService')

newsletterRouter.post('/', async (req, res) => {
  const address = req.body.address
  if (process.env.NODE_ENV === 'test') {
    return res.sendStatus(200)
  }

  try {
    await mailService.sendMail(address, newsletterWelcomeMessage.subject, newsletterWelcomeMessage.body)
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(400)
  }
})

module.exports = newsletterRouter