const mongoose = require('mongoose')
const questions = require('../services/questions/questionsCompanies')
const parser = require('../util/schemaParser')

const model = parser.parseFeedBackSchema(questions)

const companyFeedbackSchema = new mongoose.Schema(model)

try {
  module.exports = mongoose.model('CompanyFeedback')
} catch (e) {
  module.exports = mongoose.model('CompanyFeedback', companyFeedbackSchema)
}