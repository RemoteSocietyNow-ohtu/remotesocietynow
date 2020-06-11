const fileRouter = require('express').Router()
const db = require('../database/database')
const Company = require('../models/companySchema')
const questions = require('../services/questions/questionsCompanies')

fileRouter.get('/csv/', async (req, res) => {
  console.log('hei')
  const csv = await db.dataToCSV(questions,Company)

  res.setHeader('Content-disposition', 'attachment; filename=data.csv');
  res.setHeader('Content-type', 'text/csv');

  res.write(csv, function (err) {
    res.end();
  })

})

module.exports = fileRouter