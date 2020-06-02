require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const companyAnswers = require('./companyAnswers')
const peopleAnswers = require('./peopleAnswers')

const badAnswers = {
  averageBusinessTripCost: 2,
  averageBusinessTripCostOpenField: 224,
  numberOfEmployees: true,
  numberOfEmployeesOpenField: 'Open'
}

test('Backend calculate company returns results', async () => {
  const response = await supertest(app)
    .post('/calculate/company/')
    .send(companyAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body[0].value).not.toBeNull()
  expect(response.body[0].title).not.toBeNull()
})

test('Backend gives error if sending bad company answers  ', async () => {
  await supertest(app)
    .post('/calculate/company/')
    .send(badAnswers)
    .expect(400)
    .expect('Content-Type', /application\/json/)

})

test('Backend gives error if sending bad people answers  ', async () => {
  await supertest(app)
    .post('/calculate/person/')
    .send(badAnswers)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('Backend returns results', async () => {
  const response = await supertest(app)
    .post('/calculate/person/')
    .send(peopleAnswers)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  console.log(response.body[0])
  expect(response.body[0].value).not.toBeNull()
  expect(response.body[0].title).not.toBeNull()
})