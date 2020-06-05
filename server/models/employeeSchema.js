const mongoose = require('mongoose')
const questions = require('../services/questions/questionsPeople')

const model = {}

for(const field of questions){
  model[field.identifyingString] = field.dataType
}

const employeeSchema = new mongoose.Schema(model)

try {  
  module.exports = mongoose.model('Employee')
} catch (e) {
  module.exports = mongoose.model('Employee', employeeSchema)
}

