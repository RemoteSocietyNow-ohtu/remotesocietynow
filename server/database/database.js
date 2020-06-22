const mongoose = require('mongoose')
const databaseUrl = require('../util/databaseUrl')
const converter = require('json-2-csv')
const User = require('../models/userSchema')
const AdminSettings = require('../models/AdminSettingsSchema')
const bcrypt = require('bcrypt')
const url = databaseUrl.getDatabaseUrl()
const parser = require('../util/schemaParser')

const initializeAdmin = async() => {
  const saltrounds = 10
  const password = await bcrypt.hash(process.env.ADMINPASSWORD, saltrounds)
  const user = new User({
    username: 'Admin',
    passwordHash: password,
    role: 'ADMIN'
  })
  await user.save()
}

const initializeSettings = async () => {
  const settings = await AdminSettings.findOne({ })
  if (!settings) { 
    const newSettings = new AdminSettings( { saveDataToDatabase: true })
    await newSettings.save()
  }  
}

const connectToDatabase = async () => {
  try{
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    initializeSettings()
    console.log('connected to mongoose')
    try{
      await initializeAdmin()
      console.log('Admin created')
    }catch{
      console.log('Admin already exists')
    }
  }catch(error){
    console.log(error)
  }   
}

const dataToCSV = async (questions, model) => {
  const data = await model.find({})
  const dataModel = parser.parseSavedDataSchema(questions)
  const columnNames = Object.keys(dataModel)

  let options = { keys: columnNames }
  
  let str = await converter.json2csvAsync(data, options)
  return str
}

const feedbackToCSV = async (questions, model) => {
  const data = await model.find({})
  const dataModel = parser.parseFeedBackSchema(questions)
  const columnNames = Object.keys(dataModel)
 
  let options = { keys: columnNames }
  
  let str = await converter.json2csvAsync(data, options)
  return str
}

const dataToCSVById = async (questions,model,id) => {
 
  const data = await model.find({'user': `${id}`})
  const datamodel = parser.parseSavedDataSchema(questions)
  const columnNames = Object.keys(datamodel)

  let options = {keys:columnNames}

  let str = await converter.json2csvAsync(data,options)
  return str
}
 
module.exports = {
  connectToDatabase,
  dataToCSV,
  feedbackToCSV,
  dataToCSVById
}



