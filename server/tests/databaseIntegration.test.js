require('@babel/polyfill')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')

const { companyAnswers, companyAnswersAllCommentFieldsEmpty } = require('./companyAnswers')
const { peopleAnswers, peopleAnswersAllCommentFieldsEmpty } = require('./peopleAnswers')

const url = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI

beforeEach(async () => {
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  await Company.deleteMany({})
  await CompanyFeedback.deleteMany({})
  await Employee.deleteMany({})
  await EmployeeFeedback.deleteMany({})
  await mongoose.connection.close()
})

const sendCompanies = async () => {
  await supertest(app)
    .post('/calculate/company/save/')
    .send(companyAnswers)
    .expect('Content-Type', /application\/json/)
  await supertest(app)
    .post('/calculate/company/save/')
    .send(companyAnswers)
    .expect('Content-Type', /application\/json/)
}

const sendPeople = async () => {
  await supertest(app)
    .post('/calculate/person/save/')
    .send(peopleAnswers)
    .expect('Content-Type', /application\/json/)
  await supertest(app)
    .post('/calculate/person/save/')
    .send(peopleAnswers)
    .expect('Content-Type', /application\/json/)
}

test('company data is saved to database', async () => { 
  await sendCompanies()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const companies = await Company.find({})  
  expect(companies.length).toBe(2)
})

test('company data is saved to database has id property', async () => {  
  await sendCompanies()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const companies = await Company.find({})   
  expect(companies[0]['_id']).toBeDefined
})

test('companyFeedback data is saved to database', async () => {
  await sendCompanies()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const companiesFeedback = await CompanyFeedback.find({})
  expect(companiesFeedback.length).toBe(2)
})

test('If all comment fields in company are empty do not save data at all', async() => {
  await supertest(app)
    .post('/calculate/company/save/')
    .send(companyAnswersAllCommentFieldsEmpty)
    .expect('Content-Type', /application\/json/)
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const companiesFeedback = await CompanyFeedback.find({})
  expect(companiesFeedback.length).toBe(0)
})

test('people data is saved to database', async () => {
  await sendPeople()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const people = await Employee.find({})
  expect(people.length).toBe(2)
})

test('people data is saved to database has id property', async () => { 
  await sendPeople()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const people = await Employee.find({})
  expect(people[0]._id).toBeDefined()   
})

test('peopleFeedback data is saved to database', async () => {
  await sendPeople()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const peopleFeedback = await EmployeeFeedback.find({})
  expect(peopleFeedback.length).toBe(2)
})

test('If all comment fields in people are empty do not save data at all', async() => {
  await supertest(app)
    .post('/calculate/person/save/')
    .send(peopleAnswersAllCommentFieldsEmpty)
    .expect('Content-Type', /application\/json/)
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const peopleFeedback = await EmployeeFeedback.find({})
  expect(peopleFeedback.length).toBe(0)
})

afterEach(async () => {
  await mongoose.connection.close()
})