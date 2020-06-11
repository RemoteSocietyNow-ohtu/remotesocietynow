const mongoose = require('mongoose')
const databaseUrl = require('../util/databaseUrl')
const converter = require('json-2-csv')
const fs = require('fs')
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

const dataToCSV = (questions, model, filename) => {
  const objectArray = []
  try {
    // retrieve data from Mongo in JSON format
    model.find({}).then(result => {
      result.forEach(element => {
        objectArray.push(element)
      })
      
      const columnNames = []
      questions.forEach(element => {
        columnNames.push(element.identifyingString)
      })
      let options = {
        keys : columnNames
      }
      // convert to CSV
      converter.json2csv(objectArray, (err, csv) => {
        if (err) {
          console.log('error')
          throw err
        }
        // write CSV to a file
        fs.writeFileSync(filename, csv)
        console.log('file', filename, 'created')
      }, options)
    })
  } catch(error) {
    console.log('error with csv creation:', error.message)
  }
}

const feedbackToCSV = (questions, model, filename) => {
  const objectArray = []
  try {
    // retrieve data from Mongo in JSON format
    model.find({}).then(result => {
      result.forEach(element => {
        objectArray.push(element)
      })
      const columnNames = []
      questions.forEach(element => {
        columnNames.push(element.identifyingString + 'OpenField')
      })

      let options = {
        keys : columnNames
      }
      // convert to CSV
      converter.json2csv(objectArray, (err, csv) => {
        if (err) {
          console.log('error')
          throw err
        }
        // write CSV to a file
        fs.writeFileSync(filename, csv)
        console.log('file', filename, 'created')
      }, options)
    })
  } catch(error) {
    console.log('error with csv creation:', error.message)
  }
}

module.exports = {
  connectToDatabase,
  dataToCSV,
  feedbackToCSV
}



