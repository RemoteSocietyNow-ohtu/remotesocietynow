require('@babel/polyfill')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const companyAnswers = require('./companyAnswers')
const peopleAnswers = require('./peopleAnswers')

test('company data is saved to database', async () => { 
  await supertest(app)
    .post('/calculate/company/save/')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)  
})

test('empoyee data is saved to database', async () => {
  await supertest(app)
    .post('/calculate/person/save/')
    .send(peopleAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)  
})


afterEach(async () => {
  await mongoose.connection.close()
})