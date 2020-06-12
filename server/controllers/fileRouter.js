const fileRouter = require('express').Router()
const db = require('../database/database')
const jwt = require('jsonwebtoken')
const Company = require('../models/companySchema')
const Employee = require('../models/employeeSchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const companyQuestions = require('../services/questions/questionsCompanies')
const employeeQuestions = require('../services/questions/questionsPeople')

fileRouter.get('/companyCSV/', async (req, res) => {

  if (process.env.NODE_ENV === 'development') {

    const csv = await db.dataToCSV(companyQuestions, Company)

    res.setHeader('Content-disposition', 'attachment; filename=companyData.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  } else {
    res.send('work in progress')
  }
})

fileRouter.get('/employeeCSV/', async (req, res) => {

  if (process.env.NODE_ENV === 'development') {

    const csv = await db.dataToCSV(employeeQuestions, Employee)

    res.setHeader('Content-disposition', 'attachment; filename=employeeData.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  } else {
    res.send('work in progress')
  }
})

fileRouter.get('/companyFeedbackCSV/', async (req, res) => {

  if (process.env.NODE_ENV === 'development') {

    const csv = await db.feedbackToCSV(companyQuestions, CompanyFeedback)

    res.setHeader('Content-disposition', 'attachment; filename=companyFeedback.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
  } else {
    res.send('work in progress')
  }
})

fileRouter.get('/employeeFeedbackCSV/', async (req, res) => {

  if (process.env.NODE_ENV === 'development') {

    const csv = await db.feedbackToCSV(employeeQuestions, EmployeeFeedback)

    res.setHeader('Content-disposition', 'attachment; filename=employeeFeedback.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })

  } else {
    res.send('work in progress')
  }
})

fileRouter.get('/userDataCSV/', async (req, res) => {

  if (process.env.NODE_ENV === 'development') {

    const getTokenFrom = request => {
      const authorization = request.get('authorization')
      if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
      }
      return null
    }

    const body = req.body
    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    console.log(decodedToken.id)

    const user = await User.findById(decodedToken.id)

    console.log(user)
    /*
    const csv = await db.userDataToCSV(employeeQuestions, Employee, user.id)

    res.setHeader('Content-disposition', 'attachment; filename=userData.csv')
    res.setHeader('Content-type', 'text/csv')

    res.write(csv, function () {
      res.end()
    })
    */
  }else{
    res.send('work in progress')
  }
})

module.exports = fileRouter