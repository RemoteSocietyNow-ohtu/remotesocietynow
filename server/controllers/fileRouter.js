const fileRouter = require('express').Router()
const db = require('../database/database')
const Company = require('../models/companySchema')
const questions = require('../services/questions/questionsCompanies')
const authenticator = require('../util/userAuthenticator')

fileRouter.get('/csv/', async (req, res) => {
  if (process.env.NODE_ENV === 'development') {

    if (authenticator.isAdmin(req)) {
      const csv = await db.dataToCSV(questions, Company)

      res.setHeader('Content-disposition', 'attachment; filename=data.csv')
      res.setHeader('Content-type', 'text/csv')

      res.write(csv, function () {
        res.end()
      })
    } else {
      res.send('not authenticated')
    }
  } else {
    res.send('work in progress')
  }
})

module.exports = fileRouter