const fileRouter = require('express').Router()
const db = require('../database/database')
const Company = require('../models/companySchema')
const Employee = require('../models/employeeSchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const User = require('../models/userSchema')
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
  if (!req.params.token) {
    return res.send('Unauthorized')
  } 
  const token = req.params.token
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin) {
    const csv = await db.dataToCSV(companyQuestions, Company)
    startDownload(res, csv, 'companydata.csv')
    return
  }

  const decodedToken = auth.decodeToken(token)
  if (decodedToken === null) {
    return res.send('Unauthorized')
  }

  const id = decodedToken.id
  const csv = await db.dataToCSVById(companyQuestions, Company, id)
  startDownload(res, csv, `${id}.csv`)
 
})

fileRouter.get('/employeeCSV/:token?', async (req, res) => {
  if (!req.params.token) {
    return res.send('Unauthorized')
  } 
  const token = req.params.token
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin) {
    const csv = await db.dataToCSV(employeeQuestions, Employee)
    startDownload(res, csv, 'employeedata.csv')
    return
  }
  const decodedToken = auth.decodeToken(token)
  if (decodedToken === null) {
    return res.send('Unauthorized')
  }

  const id = decodedToken.id
  const csv = await db.dataToCSVById(employeeQuestions, Employee, id)
  startDownload(res, csv, `${id}.csv`)
})

fileRouter.get('/companyFeedbackCSV/:token?', async (req, res) => {
  if (!req.params.token) {
    return res.send('Unauthorized')
  } 
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
  if (!req.params.token) {
    return res.send('Unauthorized')
  } 
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



fileRouter.post('/deleteUser/', async (req,res) => {
  
  const token = auth.getTokenFrom(req)
  const decodedToken = auth.decodeToken(token)
  const id = decodedToken.id
  
  if(id){

    await Company.find({'user': `${id}`}).deleteMany()
    await Employee.find({'user': `${id}`}).deleteMany()
    await User.findByIdAndDelete(id)

    res.send(`User ${id} deleted`)
  }else{
    res.status(400).send('Error in user deletion')
  }
})

module.exports = fileRouter