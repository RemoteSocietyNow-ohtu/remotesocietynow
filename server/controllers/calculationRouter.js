const calculationRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const remoteWorkCalculator = require('../services/calculations/remoteWorkCalculator')
const bodyParser = require('../util/calculationBodyParser')
const validator = require('../util/requestValidator')
const Employee = require('../models/employeeSchema')
const Company = require('../models/companySchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const User = require('../models/userSchema')


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

/** Handles POST requests to (baseUrl)/api/calculations/person from frontend
 * responds with total annual co2 emissions, and the potential saves from moving to more remote work
 * Post to /person/save additionally saves data to database
 */
calculationRouter.post('/person/:save?', async (req, res) => {
  const body = req.body

  const calculateData = [
    +body.dailyCommuteKm,
    +body.noOfDaysOfUsage,
    +body.noOfDaysOfUsageSecond,
    body.typicalVehicle,
    body.secondVehicle,
    +body.numberOfRemoteworkDays
  ]
  const token = getTokenFrom(req)
  
  const savedData = bodyParser.parseSavedDataFromBody(body)
  const feedbacks = bodyParser.parseFeedBacksFromBody(body)

  if(token !== null){
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)
    savedData['user'] = user._id
  }

  /* Calls the calculateBenefitsForPerson in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForPerson(...calculateData)

  /* Calls storeEmployeeData in /server/database/database.js to save all employee input to database. */
  if (req.params.save === 'save') {
    const employeeData = new Employee(savedData)
    await employeeData.save()
    /* Calls storeEmployeeFeedback in /server/database/database.js to save employee feedback to database. */
    if (validator.feedBacksAreNotEmpty(feedbacks)) {
      const employeeFeedBacks = new EmployeeFeedback(feedbacks)
      await employeeFeedBacks.save()
    }
  }
  res.json(result)
})


/**
 * Handles POST requests to (baseUrl)/api/calculations/company from frontend
 * responds with total annual costs and potential money saved by moving to more remote work
 * Post to /company/save additionally saves data to database
 */
calculationRouter.post('/company/:save?', async (req, res) => {
  const body = req.body
  const rent = +req.body.officeRentExpenses
  const officeUpkeep = +req.body.otherUpkeepExpenses
  const employees = +req.body.numberOfEmployees
  const businessTravelCost = +req.body.averageBusinessTripCost
  const remoteShare = req.body.remoteShare ? req.body.remoteShare : 0

  const savedData = bodyParser.parseSavedDataFromBody(body)
  const feedbacks = bodyParser.parseFeedBacksFromBody(body)

  const token = getTokenFrom(req)

  if(token !== null){
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)
    savedData['user'] = user._id
  }
  
  /* Calls the calculateBenefitsForCompany in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, businessTravelCost, remoteShare)

  /* Calls storeCompanyData in /server/database/database.js to save all company input to database. */
  if (req.params.save === 'save') {
    const companyData = new Company(savedData)
    await companyData.save()

    if (validator.feedBacksAreNotEmpty(feedbacks)) {
      const companyFeedback = new CompanyFeedback(feedbacks)
      await companyFeedback.save()

    }
  }
  res.json(result)
})

module.exports = calculationRouter