const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({

  identifyingString: String,
  name: String,
  feedback: String
})

module.exports = mongoose.model('Feedback', feedbackSchema)


