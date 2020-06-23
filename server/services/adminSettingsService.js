const AdminSettings = require('../models/adminSettingsSchema')

const getSaveToDatabase = async () => {
  try {
    const settings = await AdminSettings.findOne({ })
    return settings.saveDataToDatabase
  } catch {
    return null
  }  
}

const initializeSettings = async () => {
  const settings = await AdminSettings.findOne({ })
  if (!settings) { 
    const newSettings = new AdminSettings( { saveDataToDatabase: true })
    await newSettings.save()
  }  
}

module.exports = { getSaveToDatabase, initializeSettings }
