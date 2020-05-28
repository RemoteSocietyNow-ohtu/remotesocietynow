const calculationRouter = require('express').Router()
const remoteWorkCalculator = require('../services/calculations/remoteWorkCalculator')
const database = require('../database/database')

/** Handles POST requests to (baseUrl)/api/calculations/person from frontend
 * responds with total annual co2 emissions, and the potential saves from moving to more remote work
 * Post to /person/save additionally saves data to database
 */
calculationRouter.post('/person/:save?', (req,res) => {
  const distance = +req.body.dailyCommuteKm
  const daysFirst = +req.body.noOfDaysOfUsage
  const remoteDays = +req.body.numberOfRemoteworkDays
  const firstVehicle = req.body.typicalVehicle
  const secondVehicle = req.body.secondVehicle
  const daysSecond = +req.body.noOfDaysOfUsageSecond
  const dailyCommuteMinutes = +req.body.dailyCommuteMinutes
  const annualCommuteExpenses = +req.body.annualCommuteExpenses
  const opinionRemote = req.body.opinionRemote
  const numberOfBusinessTrips = +req.body.numberOfBusinessTrips
  const numberOfHoursOnPlane = +req.body.numberOfHoursOnPlane
  
  /* Calls the calculateBenefitsForPerson in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForPerson(distance,daysFirst,daysSecond,firstVehicle,secondVehicle,remoteDays)
  res.json(result)

  /* Calls storeEmployeeData in /server/database/database.js to save all employee input to database. */
  if(req.params.save === 'save') {
    database.storeEmployeeData(firstVehicle, daysFirst, secondVehicle, daysSecond, distance,
      dailyCommuteMinutes, remoteDays, annualCommuteExpenses, opinionRemote, numberOfBusinessTrips, 
      numberOfHoursOnPlane)

    /* Calls storeEmployeeFeedback in /server/database/database.js to save employee feedback to database. */
    const distanceOpenField = req.body.dailyCommuteKmOpenField
    const daysFirstOpenField = req.body.noOfDaysOfUsageOpenField
    const remoteDaysOpenField = req.body.numberOfRemoteworkDaysOpenField
    const firstVehicleOpenField = req.body.typicalVehicleOpenField
    const secondVehicleOpenField = req.body.secondVehicleOpenField
    const daysSecondOpenField = req.body.noOfDaysOfUsageSecondOpenField
    const dailyCommuteMinutesOpenField = req.body.dailyCommuteMinutesOpenField
    const annualCommuteExpensesOpenField = req.body.annualCommuteExpensesOpenField
    const opinionRemoteOpenField = req.body.opinionRemoteOpenField
    const numberOfBusinessTripsOpenField = req.body.numberOfBusinessTripsOpenField
    const numberOfHoursOnPlaneOpenField = req.body.numberOfHoursOnPlaneOpenField

    database.storeEmployeeFeedback(distanceOpenField, daysFirstOpenField, remoteDaysOpenField, firstVehicleOpenField,
      secondVehicleOpenField, daysSecondOpenField, dailyCommuteMinutesOpenField, annualCommuteExpensesOpenField,
      opinionRemoteOpenField, numberOfBusinessTripsOpenField, numberOfHoursOnPlaneOpenField)
  }
})

const extractCompanyData = (req) => {
  return {
    rent: req.body.officeRentExpenses,
    officeUpkeep: req.body.otherUpkeepExpenses,
    employees: req.body.numberOfEmployees,
    businessTravelCost: req.body.averageBusinessTripCost,
    remoteShare: req.body.remoteShare ? req.body.remoteShare : 0
  }
}

/**
 * Handles POST requests to (baseUrl)/api/calculations/company from frontend
 * responds with total annual costs and potential money saved by moving to more remote work
 * Post to /company/save additionally saves data to database
 */
calculationRouter.post('/company/:save?', (req,res) => {  
  const { rent, officeUpkeep, employees, businessTravelCost, remoteShare} = extractCompanyData(req)
  /* Calls the calculateBenefitsForCompany in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, businessTravelCost, remoteShare)
  res.json(result)
  /* Calls storeCompanyData in /server/database/database.js to save all company input to database. */
  if (req.params.save === 'save') {    
    database.storeCompanyData(employees, rent, officeUpkeep, businessTravelCost)  
    
    /* Calls storeCompanyFeedback in /server/database/database.js to save question feedback */
    const rentFeedback = req.body.officeRentExpensesOpenField
    const officeUpKeepFeedback = req.body.otherUpkeepExpensesOpenField
    const employeesFeedback = req.body.numberOfEmployeesOpenField
    const businessTravelCostFeedback = req.body.averageBusinessTripCostOpenField
    database.storeCompanyFeedback(rentFeedback, officeUpKeepFeedback, employeesFeedback, businessTravelCostFeedback)
  }  
})



module.exports = calculationRouter