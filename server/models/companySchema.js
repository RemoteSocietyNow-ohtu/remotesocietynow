const mongoose = require('mongoose')
const questions = require('../services/questions/questionsCompanies')
const parser = require('../util/schemaParser')

const model = parser.parseSavedDataSchema(questions)

const companySchema = new mongoose.Schema(model)

companySchema.add({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date
})

try {
  module.exports = mongoose.model('Company')
} catch (e) {
  module.exports = mongoose.model('Company', companySchema)
}