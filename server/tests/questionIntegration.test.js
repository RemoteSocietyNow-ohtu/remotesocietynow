const supertest = require('supertest')
const app = require('../index')

test('Can get questions for companies', (done) => {
  supertest(app)
    .get('/questions/companies/')
    .expect(200)
    .expect('Content-Type', /application\/json/).end(done)
})