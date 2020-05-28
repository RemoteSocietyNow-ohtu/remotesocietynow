const mongoose = require('mongoose')

const companyFeedbackSchema = new mongoose.Schema({

  numberOfEmployeesOpenField: String,
  officeRentExpensesOpenField: String,
  otherUpkeepExpensesOpenField: String,
  averageBusinessTripCostOpenField: String,
})

module.exports = mongoose.model('CompanyFeedback', companyFeedbackSchema)


/*



*/

