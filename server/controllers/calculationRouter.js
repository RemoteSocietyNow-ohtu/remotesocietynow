const calculationRouter = require('express').Router()
const remoteWorkCalculator = require('../services/calculations/remoteWorkCalculator')
const database = require('../database/database')
const storeEmployeeData = database.storeEmployeeData
const storeCompanyData = database.storeCompanyData

/** Handles POST requests to (baseUrl)/api/calculations/person from frontend
 * responds with total annual co2 emissions, and the potential saves from moving to more remote work
 */
calculationRouter.post('/person', (req,res) => {
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
  storeEmployeeData(firstVehicle, daysFirst, secondVehicle, daysSecond, distance,
    dailyCommuteMinutes, remoteDays, annualCommuteExpenses, opinionRemote, numberOfBusinessTrips, 
    numberOfHoursOnPlane)
})

/**
 * Handles POST requests to (baseUrl)/api/calculations/company from frontend
 * responds with total annual costs and potential money saved by moving to more remote work
 */
calculationRouter.post('/company', (req,res) => {
  const rent = +req.body.officeRentExpenses
  const officeUpkeep = +req.body.otherUpkeepExpenses
  const employees = +req.body.numberOfEmployees
  const businessTravelCost = +req.body.averageBusinessTripCost
  const remoteShare = req.body.remoteShare ? req.body.remoteShare : 0
  
  /* Calls the calculateBenefitsForCompany in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, businessTravelCost, remoteShare)
  res.json(result)

  /* Calls storeCompanyData in /server/database/database.js to save all company input to database. */
  storeCompanyData(employees, rent, officeUpkeep, businessTravelCost)

})

module.exports = calculationRouter