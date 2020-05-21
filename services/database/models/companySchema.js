const companySchema = new mongoose.Schema({
  numberOfEmployees: Number,
  officeRentExpenses: Number,
  otherUpkeepExpenses: Number,
  averageBusinessTripCost: Number,
})

module.exports = mongoose.model("Company", companySchema)