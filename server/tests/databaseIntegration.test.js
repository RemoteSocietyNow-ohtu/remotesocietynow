require('@babel/polyfill')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')

const companyAnswers = require('./companyAnswers')
const peopleAnswers = require('./peopleAnswers')

const url = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI

beforeEach(async () => {
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  await Company.deleteMany({})
  await CompanyFeedback.deleteMany({})
  await Employee.deleteMany({})
  await EmployeeFeedback.deleteMany({})
  await mongoose.connection.close()
})

test('company data is saved to database using app-api', async () => {
  try {
    await supertest(app)
      .post('/calculate/company/save/')
      .send(companyAnswers)
      .expect('Content-Type', /application\/json/)
    await supertest(app)
      .post('/calculate/company/save/')
      .send(companyAnswers)
      .expect('Content-Type', /application\/json/)
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    const companies = await Company.find({})  
    expect(companies.length).toBe(2)
    const companiesFeedback = await CompanyFeedback.find({})
    expect(companiesFeedback.length).toBe(2)
  } catch {
    throw new Error()
  }
})

test('people data is saved to database using app-api', async () => {
  try {
    await supertest(app)
      .post('/calculate/person/save/')
      .send(peopleAnswers)
      .expect('Content-Type', /application\/json/)
    await supertest(app)
      .post('/calculate/person/save/')
      .send(peopleAnswers)
      .expect('Content-Type', /application\/json/)
    expect(200).toBe(200)
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    const people = await Employee.find({})  
    expect(people.length).toBe(2)
    const peopleFeedback = await EmployeeFeedback.find({})
    expect(peopleFeedback.length).toBe(2)
  } catch {
    throw new Error()
  }
})

afterEach(async () => {
  await mongoose.connection.close()
  console.log('exited test')
})