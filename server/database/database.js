const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

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



