const settingsRouter = require('express').Router()
const auth = require('../util/userAuthenticator')
const AdminSettings = require('../models/AdminSettingsSchema')

settingsRouter.post('/', async (req, res) => {
  const token = auth.getTokenFrom(req)  
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin === false) {    
    return res.sendStatus(403)
  }

  try {
    const settings = await AdminSettings.findOne({ })
    if (!settings) {    
      const newSettings = new AdminSettings( { saveDataToDatabase: req.body.saveDataToDatabase })
      await newSettings.save()
    } else {
      await AdminSettings.replaceOne({ }, { saveDataToDatabase: req.body.saveDataToDatabase })
    }      
    res.send(await AdminSettings.findOne({ }))
  } catch {
    return res.sendStatus(400)
  }  
})

settingsRouter.get('/', async (req,res) => {
  try {
    const settings = await AdminSettings.findOne({ })
    res.send(settings)
  } catch {
    res.sendStatus(500)
  }
})

module.exports = settingsRouter