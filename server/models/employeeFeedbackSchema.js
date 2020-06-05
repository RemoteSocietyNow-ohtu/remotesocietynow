const mongoose = require('mongoose')
const questions = require('../services/questions/questionsPeople')

const model = {}

for(let field of questions){
  model[field.identifyingString + 'OpenField'] = String
}

const employeeFeedbackSchema = new mongoose.Schema(model)

try {
  module.exports = mongoose.model('EmployeeFeedback')
} catch (e) {
  module.exports = mongoose.model('EmployeeFeedback', employeeFeedbackSchema)
}

