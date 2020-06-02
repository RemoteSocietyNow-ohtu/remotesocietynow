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
  
  //validate
  if (isNaN(distance) || isNaN(daysFirst) || isNaN(remoteDays) || isNaN(daysSecond) 
    || isNaN(dailyCommuteMinutes) || isNaN(annualCommuteExpenses) || isNaN(numberOfBusinessTrips) || isNaN(numberOfHoursOnPlane)
    || typeof firstVehicle !== 'string' || typeof secondVehicle !== 'string' || typeof opinionRemote !== 'string') {
    console.log('Invalid value')
    return res.status(400).send({ error: 'Invalid value'})
  }
  /*
  && 
  typeof firstVehicle === 'string' && typeof secondVehicle === 'string' && typeof opinionRemote === 'string'*/
  /* Calls the calculateBenefitsForPerson in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForPerson(distance,daysFirst,daysSecond,firstVehicle,secondVehicle,remoteDays)
  
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
  res.json(result)
})


/**
 * Handles POST requests to (baseUrl)/api/calculations/company from frontend
 * responds with total annual costs and potential money saved by moving to more remote work
 * Post to /company/save additionally saves data to database
 */
calculationRouter.post('/company/:save?', async (req,res) => {
  const companyName = req.body.companyName
  const rent = +req.body.officeRentExpenses
  const officeUpkeep = +req.body.otherUpkeepExpenses
  const employees = +req.body.numberOfEmployees
  const businessTravelCost = +req.body.averageBusinessTripCost
  const remoteShare = req.body.remoteShare ? req.body.remoteShare : 0

  //validate
  if (isNaN(rent) || isNaN(officeUpkeep) || isNaN(employees) || isNaN(businessTravelCost) || isNaN(remoteShare) || typeof companyName !== 'string') {
    console.log('Invalid value')
    return res.status(400).send({ error: 'Invalid value'})
  }
  /* Calls the calculateBenefitsForCompany in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, businessTravelCost, remoteShare)

  /* Calls storeCompanyData in /server/database/database.js to save all company input to database. */
  if (req.params.save === 'save') {     
    await database.storeCompanyData(companyName, employees, rent, officeUpkeep, businessTravelCost)      
 
    const companyNameFeedback = req.body.companyNameOpenField
    const rentFeedback = req.body.officeRentExpensesOpenField
    const officeUpKeepFeedback = req.body.otherUpkeepExpensesOpenField
    const employeesFeedback = req.body.numberOfEmployeesOpenField
    const businessTravelCostFeedback = req.body.averageBusinessTripCostOpenField
    await database.storeCompanyFeedback(companyNameFeedback, rentFeedback, officeUpKeepFeedback, employeesFeedback, businessTravelCostFeedback)
  }
  res.json(result)   
})

module.exports = calculationRouter