const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  typicalVehicle: String,
  noOfDaysOfUsage: Number,
  secondVehicle: String,
  noOfDaysOfUsageSecond: Number,
  dailyCommuteKm: Number,
  dailyCommuteMinutes: Number,
  numberOfRemoteworkDays: Number,
  annualCommuteExpenses: Number,
  opinionRemote: String,
  numberOfBusinessTrips: Number,
  numberOfHoursOnplane: Number
})

try {  
  module.exports = mongoose.model('Employee')
} catch (e) {
  module.exports = mongoose.model('Employee', employeeSchema)
}

