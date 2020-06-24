require('@babel/polyfill')
const config = require('../../../config/common')
const mailService = require('../../services/mailService/mailService')

const testMailConf = {
  from: config.mailUsername,
  to: 'test.test@testdomain.biz',
  subject: 'This is test subject',
  html: 'This is test body'
}

test('test mail service', async ()=>{
  const response = await mailService.sendMail(testMailConf)
  console.log(response)
  const hasResposponseCodeOkay = response.response.includes('250')
  expect(hasResposponseCodeOkay).toBe(true)
  const hasRightReciever = response.envelope.to.includes('test.test@testdomain.biz')
  console.log(response.envelope.to)
  expect(hasRightReciever).toBe(true)
})