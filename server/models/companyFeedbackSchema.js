const mongoose = require('mongoose')

const companyFeedbackSchema = new mongoose.Schema({
  companyNameFeedback: String,
  numberOfEmployeesOpenField: String,
  officeRentExpensesOpenField: String,
  otherUpkeepExpensesOpenField: String,
  averageBusinessTripCostOpenField: String,
})

try {
  module.exports = mongoose.model('CompanyFeedback')
} catch (e) {
  module.exports = mongoose.model('CompanyFeedback', companyFeedbackSchema)
}