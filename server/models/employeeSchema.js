const mongoose = require('mongoose')
const questions = require('../services/questions/questionsPeople')
const parser = require('../util/schemaParser')

const model = parser.parseSavedDataSchema(questions)

const employeeSchema = new mongoose.Schema(model)

try {  
  module.exports = mongoose.model('Employee')
} catch (e) {
  module.exports = mongoose.model('Employee', employeeSchema)
}

