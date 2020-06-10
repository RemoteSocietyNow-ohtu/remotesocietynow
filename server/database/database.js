const mongoose = require('mongoose')
const databaseUrl = require('../util/databaseUrl')
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

module.exports = {
  connectToDatabase
}



