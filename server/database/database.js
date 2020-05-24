const storeEmployeeData = (typicalVehicle, noOfDaysOfUsage, secondVehicle, noOfDaysOfUsageSecond, dailyCommuteKm,
  dailyCommuteMinutes, numberOfRemoteworkDays, annualCommuteExpenses, opinionRemote, numberOfBusinessTrips, 
  numberOfHoursOnplane) => {
  
  const mongoose = require('mongoose')
  const Employee = require('../models/employeeSchema')
  const url = process.env.MONGODB_URI

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

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })

  storedEmployee.save().then(() => { 
    console.log('employee data saved!')
    mongoose.connection.close()
  })

}

const storeCompanyData = (numberOfEmployees, officeRentExpenses, otherUpkeepExpenses, averageBusinessTripCost) => {
  
  const mongoose = require('mongoose')
  const Company = require('../models/companySchema')
  const url = process.env.MONGODB_URI

  const storedCompany = new Company({
    numberOfEmployees: numberOfEmployees,
    officeRentExpenses: officeRentExpenses,
    otherUpkeepExpenses: otherUpkeepExpenses,
    averageBusinessTripCost: averageBusinessTripCost,
  })

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })

  storedCompany.save().then(() => { 
    console.log('company saved!')
    mongoose.connection.close()
  })
}

const storeQuestionFeedback = (identifyingString, name, feedback) => {
  
  const mongoose = require('mongoose')
  const Company = require('../models/feedbackSchema')
  const url = process.env.MONGODB_URI

  const storedFeedback = new Feedback({
    identifyingString: identifyingString,
    name: name,
    feedback: feedback
  })

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })

  storedCompany.save().then(() => { 
    console.log('feedback saved!')
    mongoose.connection.close()
  })
}

module.exports = {
  storeEmployeeData: storeEmployeeData,
  storeCompanyData: storeCompanyData,
  storeQuestionFeedback: storeQuestionFeedback
}



