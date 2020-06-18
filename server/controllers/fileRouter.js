const fileRouter = require('express').Router()
const db = require('../database/database')
const Company = require('../models/companySchema')
const Employee = require('../models/employeeSchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const companyQuestions = require('../services/questions/questionsCompanies')
const employeeQuestions = require('../services/questions/questionsPeople')
const auth = require('../util/userAuthenticator')


const startDownload = (res, data, filename) => {

  res.setHeader('Content-disposition', `attachment; filename=${filename}`)
  res.setHeader('Content-type', 'text/csv')

  res.write(data, function () {
    res.end()
  })

}

fileRouter.get('/companyCSV/:token?', async (req, res) => {

  const token = req.params.token
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin) {
    const csv = await db.dataToCSV(companyQuestions, Company)
    startDownload(res, csv, 'companydata.csv')
    return
  }

  const decodedToken = auth.decodeToken(token)
  if (decodedToken === null) {
    res.send('Unauthorized')
  }

  const id = decodedToken.id
  const csv = await db.dataToCSVById(companyQuestions, Company, id)
  startDownload(res, csv, `${id}.csv`)

})

fileRouter.get('/employeeCSV/:token?', async (req, res) => {

  const token = req.params.token
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin) {
    const csv = await db.dataToCSV(employeeQuestions, Employee)
    startDownload(res, csv, 'companydata.csv')
    return
  }
  const decodedToken = auth.decodeToken(token)
  if (decodedToken === null) {
    res.send('Unauthorized')
  }
  
  const id = decodedToken.id
  const csv = await db.dataToCSVById(employeeQuestions, Employee, id)
  startDownload(res, csv, `${id}.csv`)
})

fileRouter.get('/companyFeedbackCSV/:token?', async (req, res) => {

  const token = req.params.token
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin) {

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
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin) {

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