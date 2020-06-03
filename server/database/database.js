const mongoose = require('mongoose')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const url = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI

const connectToDatabase = () => {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })
}

const storeEmployeeData = async (typicalVehicle, noOfDaysOfUsage, secondVehicle, noOfDaysOfUsageSecond, dailyCommuteKm,
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

  try {
    await connectToDatabase()
    await storedEmployee.save()
    console.log('employee saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()  
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
    await connectToDatabase()
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
    await connectToDatabase()
    await storedCompanyFeedback.save()
    console.log('company feedback saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()

}

const storeEmployeeFeedback = async (typicalVehicleOpenField, noOfDaysOfUsageOpenField, secondVehicleOpenField, 
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

  try {
    await connectToDatabase()
    await storedEmployeeFeedback.save()
    console.log('employee feedback saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()
}


module.exports = {
  storeEmployeeData,
  storeEmployeeFeedback,
  storeCompanyData,
  storeCompanyFeedback
}



