const fileRouter = require('express').Router()
const db = require('../database/database')
const Company = require('../models/companySchema')
const questions = require('../services/questions/questionsCompanies')

fileRouter.get('/csv/', async (req, res) => {
  console.log('hei')
  const csv = await db.dataToCSV(questions,Company)

  res.send(csv)
})

module.exports = fileRouter