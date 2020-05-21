const questionRouter = require('express').Router()

const questionsPeople = require('../services/questions/questionsPeople')
const questionsCompanies = require('../services/questions/questionsCompanies')

questionRouter.get('/people/', (req, res) => {
  questionsPeople.map((question, i) => questionsPeople[i].number = i)
  res.json(questionsPeople)
})

questionRouter.get('/companies/', (req,res) => {
  questionsCompanies.map((question, i) => questionsCompanies[i].number = i)
  res.json(questionsCompanies)
})

questionRouter.get('/people/:id', (req, res) => {
  const id = req.params.id
  const question = questionsPeople[id]

  res.json(question)
})

module.exports = questionRouter
