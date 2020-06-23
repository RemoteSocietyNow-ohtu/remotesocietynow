const questionRouter = require('express').Router()

const questionsPeople = require('../services/questions/questionsPeople')
const questionsCompanies = require('../services/questions/questionsCompanies')

/** Handles GET requests to (baseUrl)/api/questions/people/
 *  responds with the list of questions to show in the site
 */
questionRouter.get('/people/', (req, res) => {
  questionsPeople.map((question, i) => questionsPeople[i].number = i)
  res.json(questionsPeople)
})

/** Handles GET requests to (baseUrl)/api/questions/company/
 *  responds with the list of questions to show in the site
 */
questionRouter.get('/companies/', (req,res) => {
  questionsCompanies.map((question, i) => questionsCompanies[i].number = i)
  res.json(questionsCompanies)
})

module.exports = questionRouter
