const mongoose = require('mongoose')

const employeeFeedbackSchema = new mongoose.Schema({
  typicalVehicleOpenField: String,
  noOfDaysOfUsageOpenField: String,
  secondVehicleOpenField: String,
  noOfDaysOfUsageSecondOpenField: String,
  dailyCommuteKmOpenField: String,
  dailyCommuteMinutesOpenField: String,
  numberOfRemoteworkDaysOpenField: String,
  annualCommuteExpensesOpenField: String,
  opinionRemoteOpenField: String,
  numberOfBusinessTripsOpenField: String,
  numberOfHoursOnplaneOpenField: String
})

module.exports = mongoose.model('EmployeeFeedback', employeeFeedbackSchema)


