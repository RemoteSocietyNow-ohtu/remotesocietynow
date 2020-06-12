require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')

const formData = {
  address: 'remotesocietynow@protonmail.com'
}

test('can send mail address from newsletter subscription', async () => {
  await supertest(app)
    .post('/newsletter/')
    .send(formData)
    .expect(200)
})