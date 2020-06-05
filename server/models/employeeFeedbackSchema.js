const mongoose = require('mongoose')
const questions = require('../services/questions/questionsPeople')
const parser = require('../util/schemaParser')

const model = parser.parseFeedBackSchema(questions)

const employeeFeedbackSchema = new mongoose.Schema(model)

try {
  module.exports = mongoose.model('EmployeeFeedback')
} catch (e) {
  module.exports = mongoose.model('EmployeeFeedback', employeeFeedbackSchema)
}

