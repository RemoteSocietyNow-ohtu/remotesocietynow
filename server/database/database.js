const mongoose = require('mongoose')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const url = process.env.MONGODB_URI

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
    console.log('employee data saved!')
    mongoose.connection.close()
  })
}

const storeCompanyData = (numberOfEmployees, officeRentExpenses, otherUpkeepExpenses, averageBusinessTripCost) => {
  
  const storedCompany = new Company({
    numberOfEmployees: numberOfEmployees,
    officeRentExpenses: officeRentExpenses,
    otherUpkeepExpenses: otherUpkeepExpenses,
    averageBusinessTripCost: averageBusinessTripCost,
  })

  connectToDatabase()

  storedCompany.save().then(() => { 
    console.log('company saved!')
    mongoose.connection.close()
  })
}

const storeCompanyFeedback = (numberOfEmployeesOpenField, officeRentExpensesOpenField, otherUpkeepExpensesOpenField, averageBusinessTripCostOpenField) => {
  
  const storedCompanyFeedback = new CompanyFeedback({
    numberOfEmployeesOpenField: numberOfEmployeesOpenField,
    officeRentExpensesOpenField: officeRentExpensesOpenField,
    otherUpkeepExpensesOpenField: otherUpkeepExpensesOpenField,
    averageBusinessTripCostOpenField: averageBusinessTripCostOpenField,
  })

  connectToDatabase()

  storedCompanyFeedback.save().then(() => { 
    console.log('company feedback saved!')
    mongoose.connection.close()
  })
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
    mongoose.connection.close()
  })
}

module.exports = {
  connectToDatabase,
  storeEmployeeData,
  storeEmployeeFeedback,
  storeCompanyData,
  storeCompanyFeedback
  
}



