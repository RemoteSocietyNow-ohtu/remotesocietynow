const questionRouter = require('express').Router()

const questionsPeople = require('../services/questions/questionsPeople')

questionRouter.get('/people/', (req, res) => {
  res.json(questionsPeople)
})

questionRouter.get('/people/:id', (req, res) => {
  const id = req.params.id
  const question = questionsPeople[id]

  res.json(question)
})

module.exports = questionRouter
