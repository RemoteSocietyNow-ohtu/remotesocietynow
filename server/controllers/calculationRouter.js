const calculationRouter = require('express').Router()
const remoteWorkCalculator = require('../services/calculations/remoteWorkCalculator')
const database = require('../database/database')
const bodyParser = require('../util/calculationBodyParser')

/** Handles POST requests to (baseUrl)/api/calculations/person from frontend
 * responds with total annual co2 emissions, and the potential saves from moving to more remote work
 * Post to /person/save additionally saves data to database
 */
calculationRouter.post('/person/:save?', async (req,res) => {
  const body = req.body

  const calculateData = [
    +body.dailyCommuteKm,
    +body.noOfDaysOfUsage,
    +body.noOfDaysOfUsageSecond,
    body.typicalVehicle,
    body.secondVehicle,
    +body.numberOfRemoteworkDays
  ]

  const savedData = bodyParser.parseSavedDataFromBody(body)
  const feedbacks = bodyParser.parseFeedBacksFromBody(body)

  /* Calls the calculateBenefitsForPerson in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForPerson(...calculateData)
  
  
  /* Calls storeEmployeeData in /server/database/database.js to save all employee input to database. */
  if(req.params.save === 'save') {
    await database.storeEmployeeData(savedData)
    /* Calls storeEmployeeFeedback in /server/database/database.js to save employee feedback to database. */
    await database.storeEmployeeFeedback(feedbacks)
  }
  res.json(result)
})


/**
 * Handles POST requests to (baseUrl)/api/calculations/company from frontend
 * responds with total annual costs and potential money saved by moving to more remote work
 * Post to /company/save additionally saves data to database
 */
calculationRouter.post('/company/:save?', async (req,res) => {
  const body = req.body
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
  const savedData = bodyParser.parseSavedDataFromBody(body)
  const feedbacks = bodyParser.parseFeedBacksFromBody(body)

  /* Calls the calculateBenefitsForCompany in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, businessTravelCost, remoteShare)

  /* Calls storeCompanyData in /server/database/database.js to save all company input to database. */
  if (req.params.save === 'save') {     
    await database.storeCompanyData(savedData)      
    await database.storeCompanyFeedback(feedbacks)
  }
  res.json(result)   
})

module.exports = calculationRouter