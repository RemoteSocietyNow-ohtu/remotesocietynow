const fileRouter = require('express').Router()
const db = require('../database/database')
const Company = require('../models/companySchema')
const Employee = require('../models/employeeSchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const companyQuestions = require('../services/questions/questionsCompanies')
const employeeQuestions = require('../services/questions/questionsPeople')
const auth = require('../util/userAuthenticator')

fileRouter.get('/companyCSV/:token?', async (req, res) => {

  const token = req.params.token
  if (auth.isAdmin(token)) {

    const csv = await db.dataToCSV(companyQuestions, Company)

    res.setHeader('Content-disposition', 'attachment; filename=companyData.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  }
  else {
    res.send('Unauthorized')
  }
})

fileRouter.get('/employeeCSV/:token?', async (req, res) => {

  const token = req.params.token
  if (auth.isAdmin(token)) {

    const csv = await db.dataToCSV(employeeQuestions, Employee)

    res.setHeader('Content-disposition', 'attachment; filename=employeeData.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  }
  else {
    res.send('Unauthorized')
  }

})

fileRouter.get('/companyFeedbackCSV/:token?', async (req, res) => {

  const token = req.params.token
  if (auth.isAdmin(token)) {

    const csv = await db.feedbackToCSV(companyQuestions, CompanyFeedback)

    res.setHeader('Content-disposition', 'attachment; filename=companyFeedback.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  }
  else {
    res.send('Unauthorized')
  }
})

fileRouter.get('/employeeFeedbackCSV/:token?', async (req, res) => {
  const token = req.params.token
  if (auth.isAdmin(token)) {

    const csv = await db.feedbackToCSV(employeeQuestions, EmployeeFeedback)

    res.setHeader('Content-disposition', 'attachment; filename=employeeFeedback.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  }
  else {
    res.send('Unauthorized')
  }
})

module.exports = fileRouter