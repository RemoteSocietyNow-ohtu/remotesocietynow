const newsletterRouter = require('express').Router()
const ProtonMail = require('protonmail-api')
const newsletterWelcomeMessage = require('../services/newsletterTemplates/newsletterWelcomeMessage')

newsletterRouter.post('/', async (req, res) => {
  const address = req.body.address

  if (process.env.NODE_ENV === 'test') {
    return res.send(address)
  }

  try {
    const pm = await ProtonMail.connect({
      username: process.env.PROTON_USERNAME,
      password: process.env.PROTON_PASSWORD
    })
  
    await pm.sendEmail({
      to: address,      
      subject: newsletterWelcomeMessage.subject,
      body: newsletterWelcomeMessage.body
    })

    await pm.sendEmail({
      to: process.env.PROTON_USERNAME,      
      subject: 'New RemoteSocietyNow-newsletter Subscription',
      body: `${address} wants to join RemoteSocietyNow-newsletter`
    })
    
    pm.close()
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
})

module.exports = newsletterRouter