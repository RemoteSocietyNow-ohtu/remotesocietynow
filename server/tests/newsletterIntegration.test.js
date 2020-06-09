require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')

const formData = {
  address: 'testAddress'
}

test('can send address', async () => {
  await supertest(app)
    .post('/newsletter/')
    .send(formData)
    .expect(200)
})