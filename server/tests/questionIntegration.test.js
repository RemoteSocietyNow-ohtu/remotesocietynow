require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const questionsPeople = require('../services/questions/questionsPeople')
const questionsCompanies = require('../services/questions/questionsCompanies')

test('Can get questions for companies', async () => {
  const response = await supertest(app)
    .get('/questions/companies/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.length).toBe(questionsCompanies.length)
})

test('Can get questions for employees', async () => {
  const response = await supertest(app)
    .get('/questions/people/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.length).toBe(questionsPeople.length)  
})