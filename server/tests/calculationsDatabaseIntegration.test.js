/*const mongoose = require('mongoose')
require('@babel/polyfill')
const Company = require('../models/companySchema')
const Employee = require('../models/employeeSchema')
const supertest = require('supertest')
const app = require('../index')


const api = supertest(app)

const peopleAnswers = {
  typicalVehicle: 'motorcycle',
  noOfDaysOfUsage: '3',
  secondVehicle: 'car',
  noOfDaysOfUsageSecond: '2',
  dailyCommuteKm: '99',
  dailyCommuteMinutes: '90',
  numberOfRemoteworkDays: '1',
  annualCommuteExpenses: '1399',
  opinionRemote: 'neutral',
  numberOfBusinessTrips: '1',
  numberOfHoursOnPlane: '6'
}

const companyAnswers = {
  numberOfEmployees: 5,
  officeRentExpenses: 1000,
  otherUpkeepExpenses: 500,
  averageBusinessTripCost: 0,
}

beforeEach(async () => {
  //await Company.deleteMany({})
  //  await Employee.deleteMany({})
})

test('When posting company answers, response is json and anwers are saved to database ', async () => { 
  await api
    .post('/calculate/company')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)  
  const response = await Company.find({})
  expect(response.length).toBe(1)
})

test('When posting people answers, response is json and anwers are saved to database ', async () => { 
  await api
    .post('/calculate/person')
    .send(peopleAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)  
  const response = await Employee.find({})
  expect(response.length).toBe(1)
})

afterAll(() => {
  mongoose.connection.close()
})*/