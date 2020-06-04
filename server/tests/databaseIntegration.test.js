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

test('company data is saved to database has right properties', async () => {  
  await sendCompanies()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const companies = await Company.find({})   
  expect(companies[0]['_id']).toBeDefined
  Object.keys(companies[0]._doc).forEach((key) => {
    if(key !== '_id' && key !== 'id' && key !== '__v') {
      const expectedResult = (companies[0][key] === companyAnswers[key] || companies[0][key] === Number(companyAnswers[key]))
      expect(expectedResult).toEqual(true)
    }    
  })  
})

test('companyFeedback data is saved to database', async () => {
  await sendCompanies()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const companiesFeedback = await CompanyFeedback.find({})
  expect(companiesFeedback.length).toBe(2)
})

test('people data is saved to database', async () => {
  await sendPeople()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const people = await Employee.find({})
  expect(people.length).toBe(2)
})

test('people data is saved to database has right properties', async () => { 
  await sendPeople()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const people = await Employee.find({}) 
  expect(people[0]._id).toBeDefined() 
  Object.keys(people[0]._doc).forEach((key) => {
    if(key !== '_id' && key !== 'id' && key !== '__v') {
      const expectedResult = (people[0][key] === peopleAnswers[key] || people[0][key] === Number(peopleAnswers[key]))
      expect(expectedResult).toEqual(true)
    }    
  })  
})

test('peopleFeedback data is saved to database', async () => {
  await sendPeople()
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  const peopleFeedback = await EmployeeFeedback.find({})
  expect(peopleFeedback.length).toBe(2)
})

afterEach(async () => {
  await mongoose.connection.close()
})