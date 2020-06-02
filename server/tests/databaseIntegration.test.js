require('@babel/polyfill')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const companyAnswers = require('./companyAnswers')

test('company data is saved to database', async () => {
  await supertest(app)
    .post('/calculate/company/save/')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)  
})
afterAll( async () => {
  await mongoose.connection.close()
})