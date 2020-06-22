const mongoose = require('mongoose')

const adminSettingsSchema = mongoose.Schema({
  saveDataToDatabase: Boolean
})

try {  
  module.exports = mongoose.model('AdminSettings')
} catch (e) {
  module.exports = mongoose.model('AdminSettings', adminSettingsSchema)
}