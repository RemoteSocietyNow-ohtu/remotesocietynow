const AdminSettings = require('../models/adminSettingsSchema')

const getSaveToDatabase = async () => {
  const settings = await AdminSettings.findOne({ })
  return settings.saveDataToDatabase
}

module.exports = { getSaveToDatabase }
