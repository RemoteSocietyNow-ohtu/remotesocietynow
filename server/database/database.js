const mongoose = require('mongoose')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const url = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI

const connectToDatabase = () => {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })
}

const storeEmployeeData = async (data) => {

  const storedEmployee = new Employee(data)

  try {
    await connectToDatabase()
    await storedEmployee.save()
    console.log('employee saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()  
}

const storeCompanyData = async (data) => {
  
  const storedCompany = new Company(data)

  try {
    await connectToDatabase()
    await storedCompany.save()
    console.log('company saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()
}

const storeCompanyFeedback = async (data) => {
  
  const storedCompanyFeedback = new CompanyFeedback(data)

  try {
    await connectToDatabase()
    await storedCompanyFeedback.save()
    console.log('company feedback saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()

}

const storeEmployeeFeedback = async (feedbacks) => {

  const storedEmployeeFeedback = new EmployeeFeedback(feedbacks)

  try {
    await connectToDatabase()
    await storedEmployeeFeedback.save()
    console.log('employee feedback saved!')
  } catch(error) {
    console.log('error with storing to database:', error.message)
  }
  mongoose.connection.close()
}


module.exports = {
  storeEmployeeData,
  storeEmployeeFeedback,
  storeCompanyData,
  storeCompanyFeedback
}



