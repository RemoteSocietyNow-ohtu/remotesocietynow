const adminSettings = require('../models/adminSettingsSchema')

const getSaveToDatabase = async () => {
  const settings = await adminSettings.findOne({ })
  return settings.saveDataToDatabase
}

module.exports = { getSaveToDatabase }
