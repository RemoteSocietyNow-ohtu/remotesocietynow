require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const Company = require('../models/companySchema')
const CompanyFeedback = require('../models/companyFeedbackSchema')
const Employee = require('../models/employeeSchema')
const EmployeeFeedback = require('../models/employeeFeedbackSchema')

const mock = require('./mockdatabase')

const { companyAnswers, companyAnswersAllCommentFieldsEmpty } = require('./companyAnswers')
const { peopleAnswers, peopleAnswersAllCommentFieldsEmpty } = require('./peopleAnswers')

const api = supertest(app)

beforeAll(async () => await mock.connect())

afterEach(async () => await mock.clearDB())

afterAll(async () => await mock.closeAndDrop())

const sendCompanies = async () => {
  await api
    .post('/calculate/company/save/')
    .send(companyAnswers)
    .expect('Content-Type', /application\/json/)
  await api
    .post('/calculate/company/save/')
    .send(companyAnswers)
    .expect('Content-Type', /application\/json/)
}

const sendPeople = async () => {
  await api
    .post('/calculate/person/save/')
    .send(peopleAnswers)
    .expect('Content-Type', /application\/json/)
  await api
    .post('/calculate/person/save/')
    .send(peopleAnswers)
    .expect('Content-Type', /application\/json/)
}

test('company data is saved to database', async () => { 
  await sendCompanies()
  const companies = await Company.find({})  
  expect(companies.length).toBe(2)
})

test('company data is saved to database has id property', async () => {  
  await sendCompanies()
  const companies = await Company.find({})   
  expect(companies[0]['_id']).toBeDefined
})

test('companyFeedback data is saved to database', async () => {
  await sendCompanies()
  const companiesFeedback = await CompanyFeedback.find({})
  expect(companiesFeedback.length).toBe(2)
})

test('If all comment fields in company are empty do not save data at all', async() => {
  await api
    .post('/calculate/company/save/')
    .send(companyAnswersAllCommentFieldsEmpty)
    .expect('Content-Type', /application\/json/)
  const companiesFeedback = await CompanyFeedback.find({})
  expect(companiesFeedback.length).toBe(0)
})

test('people data is saved to database', async () => {
  await sendPeople()
  const people = await Employee.find({})
  expect(people.length).toBe(2)
})

test('people data is saved to database has id property', async () => { 
  await sendPeople()
  const people = await Employee.find({})
  expect(people[0]._id).toBeDefined()   
})

test('peopleFeedback data is saved to database', async () => {
  await sendPeople()
  const peopleFeedback = await EmployeeFeedback.find({})
  expect(peopleFeedback.length).toBe(2)
})

test('If all comment fields in people are empty do not save data at all', async() => {
  await api
    .post('/calculate/person/save/')
    .send(peopleAnswersAllCommentFieldsEmpty)
    .expect('Content-Type', /application\/json/)
  const peopleFeedback = await EmployeeFeedback.find({})
  expect(peopleFeedback.length).toBe(0)
})

