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

module.exports = mongoose.model("Employee", employeeSchema)


