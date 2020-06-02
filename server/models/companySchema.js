const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  companyName: String,
  numberOfEmployees: Number,
  officeRentExpenses: Number,
  otherUpkeepExpenses: Number,
  averageBusinessTripCost: Number,
})

try {
  module.exports = mongoose.model('Company')
} catch (e) {
  module.exports = mongoose.model('Company', companySchema)
}