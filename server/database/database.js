const mongoose = require('mongoose')
const databaseUrl = require('../util/databaseUrl')
const converter = require('json-2-csv')
const url = databaseUrl.getDatabaseUrl()

const connectToDatabase = () => {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('connected to mongo')
    })
    .catch((error) => {
      console.log(error)
    })
}

const dataToCSV = async (questions, model) => {
  const objectArray = await model.find({})
  const columnNames = []
  questions.forEach(element => {
    columnNames.push(element.identifyingString)
  })

  let options = {
    keys: columnNames
  }
  
  let str = await converter.json2csvAsync(objectArray, options)
  return str
}

const feedbackToCSV = async (questions, model) => {
  const objectArray = await model.find({})
  const columnNames = []
  questions.forEach(element => {
    columnNames.push(element.identifyingString + 'OpenField')
  })

  let options = {
    keys: columnNames
  }
  
  let str = await converter.json2csvAsync(objectArray, options)
  return str
}

const userDataToCSV = async (questions, model, userId) => {
  const objectArray = await model.find({user: userId})
  const columnNames = []
  questions.forEach(element => {
    columnNames.push(element.identifyingString)
  })

  console.log(objectArray)

  let options = {
    keys: columnNames
  }
  
  let str = await converter.json2csvAsync(objectArray, options)
  return str
}

module.exports = {
  connectToDatabase,
  dataToCSV,
  feedbackToCSV,
  userDataToCSV
}



