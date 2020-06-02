const mongoose = require('mongoose')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const url = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI

const connectToDatabase = () => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })
}

const storeEmployeeData = (typicalVehicle, noOfDaysOfUsage, secondVehicle, noOfDaysOfUsageSecond, dailyCommuteKm,
  dailyCommuteMinutes, numberOfRemoteworkDays, annualCommuteExpenses, opinionRemote, numberOfBusinessTrips, 
  numberOfHoursOnplane) => {

  const storedEmployee = new Employee({
    typicalVehicle: typicalVehicle,
    noOfDaysOfUsage: noOfDaysOfUsage,
    secondVehicle: secondVehicle,
    noOfDaysOfUsageSecond: noOfDaysOfUsageSecond,
    dailyCommuteKm: dailyCommuteKm,
    dailyCommuteMinutes: dailyCommuteMinutes,
    numberOfRemoteworkDays: numberOfRemoteworkDays,
    annualCommuteExpenses: annualCommuteExpenses,
    opinionRemote: opinionRemote,
    numberOfBusinessTrips: numberOfBusinessTrips,
    numberOfHoursOnplane: numberOfHoursOnplane
  })

  connectToDatabase()

  storedEmployee.save().then(() => { 
    console.log('employee saved!')
  })
    .catch((error) => {
      console.log('error with storing to database:', error.message)
    })
    .finally(() => mongoose.connection.close())
}

const storeCompanyData = async (companyName, numberOfEmployees, officeRentExpenses, otherUpkeepExpenses, averageBusinessTripCost) => {
  
  const storedCompany = new Company({
    companyName: companyName,
    numberOfEmployees: numberOfEmployees,
    officeRentExpenses: officeRentExpenses,
    otherUpkeepExpenses: otherUpkeepExpenses,
    averageBusinessTripCost: averageBusinessTripCost,
  })

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    await storedCompany.save()
    console.log('company saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()
}

const storeCompanyFeedback = async (companyNameOpenField, numberOfEmployeesOpenField, officeRentExpensesOpenField, otherUpkeepExpensesOpenField, averageBusinessTripCostOpenField) => {
  
  const storedCompanyFeedback = new CompanyFeedback({
    companyNameOpenField: companyNameOpenField,
    numberOfEmployeesOpenField: numberOfEmployeesOpenField,
    officeRentExpensesOpenField: officeRentExpensesOpenField,
    otherUpkeepExpensesOpenField: otherUpkeepExpensesOpenField,
    averageBusinessTripCostOpenField: averageBusinessTripCostOpenField,
  })

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    await storedCompanyFeedback.save()
    console.log('company feedback saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()

}

const storeEmployeeFeedback = (typicalVehicleOpenField, noOfDaysOfUsageOpenField, secondVehicleOpenField, 
  noOfDaysOfUsageSecondOpenField, dailyCommuteKmOpenField, dailyCommuteMinutesOpenField, numberOfRemoteworkDaysOpenField, 
  annualCommuteExpensesOpenField, opinionRemoteOpenField, numberOfBusinessTripsOpenField, 
  numberOfHoursOnplaneOpenField) => {

  const storedEmployeeFeedback = new EmployeeFeedback({
    typicalVehicleOpenField: typicalVehicleOpenField,
    noOfDaysOfUsageOpenField: noOfDaysOfUsageOpenField,
    secondVehicleOpenField: secondVehicleOpenField,
    noOfDaysOfUsageSecondOpenField: noOfDaysOfUsageSecondOpenField,
    dailyCommuteKmOpenField: dailyCommuteKmOpenField,
    dailyCommuteMinutesOpenField: dailyCommuteMinutesOpenField,
    numberOfRemoteworkDaysOpenField: numberOfRemoteworkDaysOpenField,
    annualCommuteExpensesOpenField: annualCommuteExpensesOpenField,
    opinionRemoteOpenField: opinionRemoteOpenField,
    numberOfBusinessTripsOpenField: numberOfBusinessTripsOpenField,
    numberOfHoursOnplaneOpenField: numberOfHoursOnplaneOpenField
  })

  connectToDatabase()

  storedEmployeeFeedback.save().then(() => { 
    console.log('employee feedback saved!')
  })
    .catch((error) => {
      console.log('error with storing to database:', error.message)
    })
    .finally(() => mongoose.connection.close())
}

const saveCompany = async (req, companyName, rent, officeUpkeep, employees, businessTravelCost) => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    const storedCompany = new Company({
      companyName: companyName,
      numberOfEmployees: employees,
      officeRentExpenses: rent,
      otherUpkeepExpenses: officeUpkeep,
      averageBusinessTripCost: businessTravelCost,
    })
    await storedCompany.save()
    const storedCompanyFeedback = new CompanyFeedback({
      companyNameOpenField: req.body.companyNameOpenField,
      numberOfEmployeesOpenField: req.body.numberOfEmployeesOpenField,
      officeRentExpensesOpenField: req.body.officeRentExpensesOpenField,
      otherUpkeepExpensesOpenField: req.body.otherUpkeepExpensesOpenField,
      averageBusinessTripCostOpenField: req.body.averageBusinessTripCostOpenField,
    })
    await storedCompanyFeedback.save()
  }
  catch (error) {
    console.log(error)
  }
  await mongoose.connection.close()
}

module.exports = {
  connectToDatabase,
  storeEmployeeData,
  storeEmployeeFeedback,
  storeCompanyData,
  storeCompanyFeedback,
  saveCompany
}



