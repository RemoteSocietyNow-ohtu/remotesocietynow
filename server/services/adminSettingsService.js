const AdminSettings = require('../models/AdminSettingsSchema')

const getSaveToDatabase = async () => {
  const settings = await AdminSettings.findOne({ })
  return settings.saveDataToDatabase
}

module.exports = { getSaveToDatabase }
