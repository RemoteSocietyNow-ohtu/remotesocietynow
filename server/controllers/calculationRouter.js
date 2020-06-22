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
const adminSettingsService = require('../services/adminSettingsService')

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
    +body.dailyCommuteMinutes,
    +body.noOfDaysOfUsage,
    +body.noOfDaysOfUsageSecond,
    body.typicalVehicle,
    body.secondVehicle,
    +body.monthlyCommuteExpenses,
    +body.numberOfRemoteworkDays,
    +body.numberOfHoursOnPlane
  ]
  const token = getTokenFrom(req)
  let user = null
  
  const bodyData = bodyParser.parseSavedDataFromBody(body)
  const feedbacks = bodyParser.parseFeedBacksFromBody(body)

  if(token !== null){
    const decodedToken = jwt.verify(token, process.env.SECRET)
    user = await User.findById(decodedToken.id)
    bodyData['user'] = user._id
  }

  /* Calls the calculateBenefitsForPerson in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForPerson(...calculateData)

  /* Calls storeEmployeeData in /server/database/database.js to save all employee input to database. */
  
  if (req.params.save === 'save' && await adminSettingsService.getSaveToDatabase() === true) {
    console.log('save to Database')
    const employeeData = new Employee(bodyData)
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
  const remoteShare = req.body.shareOfRemoteWork ? req.body.shareOfRemoteWork : 0
  const averageCarHours = +req.body.averageCarHours
  const energyCost = +req.body.energyCost
  const energySource = req.body.energySource
  const averageFlightHours = +req.body.averageFlightHours
  const totalCommutingSubsidies = +req.body.totalCommutingSubsidies

  const bodyData = bodyParser.parseSavedDataFromBody(body)
  const feedbacks = bodyParser.parseFeedBacksFromBody(body)

  const token = getTokenFrom(req)
  let user = null

  if(token !== null){
    const decodedToken = jwt.verify(token, process.env.SECRET)
    user = await User.findById(decodedToken.id)
    bodyData['user'] = user._id
  }
  
  /* Calls the calculateBenefitsForCompany in /services/calculations/remoteWorkCalculator for emissions calculation 
    using parameters gathered above*/
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, remoteShare, averageCarHours, energyCost, energySource, averageFlightHours, totalCommutingSubsidies)

  /* Calls storeCompanyData in /server/database/database.js to save all company input to database. */  
  if (req.params.save === 'save' && await adminSettingsService.getSaveToDatabase() === true ) {    
    const companyData = new Company(bodyData)
    await companyData.save()
  
    if (validator.feedBacksAreNotEmpty(feedbacks)) {
      feedbacks['companyName'] = body.companyName
      const companyFeedback = new CompanyFeedback(feedbacks)
      await companyFeedback.save()
    }
  }
  res.json(result)
})

module.exports = calculationRouter