require('@babel/polyfill')
const mongoose = require('mongoose')
const Company =  require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const supertest = require('supertest')
const app = require('../index')
const url = process.env.MONGODB_TEST_URI

const companyAnswers = {
  averageBusinessTripCost: 2,
  averageBusinessTripCostOpenField: 'Open',
  numberOfEmployees: 2,
  numberOfEmployeesOpenField: 'Open',
  officeRentExpenses: 2,
  officeRentExpensesOpenField: "Tss",
  otherUpkeepExpenses: 2,
  otherUpkeepExpensesOpenField: ""
}

const connectToDatabase = () => {
  console.log('test connection')
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
      console.log('connected to MongoDB')
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
    })
}

beforeEach(async () => {
  connectToDatabase()
  await Company.deleteMany({})
  await CompanyFeedback.deleteMany({})
})

test('Backend returns results', async () => {
  await supertest(app)
    .post('/calculate/company')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/) 
})

test('When send company data it is saved to database', async () => {
  await supertest(app)
    .post('/calculate/company/save')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)     

  let companies = await Company.find({})
  expect(companies.length).toBe(1)

  await supertest(app)
    .post('/calculate/company/save')
    .send(companyAnswers)

  companies = await Company.find({})
  expect(companies.length).toBe(2)
})

test('When send company data, comment fields are saved to database', async () => {
  await supertest(app)
    .post('/calculate/company/save')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)     
  
  await supertest(app)
    .post('/calculate/company/save')
    .send(companyAnswers)

  const comments = await CompanyFeedback.find({})
  expect(comments.length).toBe(2)
})

afterAll(async () => {
  await mongoose.connection.close()
})