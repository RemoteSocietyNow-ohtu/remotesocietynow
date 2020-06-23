require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const AdminSettings = require('../models/adminSettingsSchema')
const Company = require('../models/companySchema')
const mock = require('./mockdatabase')
const testUtils = require('./testUtils')
const api = supertest(app)

const { companyAnswers } = require('./companyAnswers')

beforeAll(async () => await mock.connect())

afterEach(async () => await mock.clearDB())

afterAll(async () => await mock.closeAndDrop())

test('save toggle setting is saved to db', async () => { 
  const res = await testUtils.createUserAndLogin('Admin', 'test-password', 'ADMIN')
  const token = res.body.adminToken  
  await api
    .post('/settings/')
    .set({ Authorization: `bearer ${token}` })
    .send({ saveDataToDatabase: true })
  let settings = await AdminSettings.findOne({ })
  expect(settings.saveDataToDatabase).toBe(true)
  await api
    .post('/settings/')
    .set({ Authorization: `bearer ${token}` })
    .send({ saveDataToDatabase: false })
  settings = await AdminSettings.findOne({ })
  expect(settings.saveDataToDatabase).toBe(false)
  const allSettings = await AdminSettings.find({ })
  expect(allSettings.length).toBe(1)
})

test('non admin user can not toggle change settings ', async () => { 
  const res = await testUtils.createUserAndLogin('user', 'password', 'USER')
  const token = res.body.token  
  await api
    .post('/settings/')
    .set({ Authorization: `bearer ${token}` })
    .send({ saveDataToDatabase: true })
    .expect(403)    
})

test('data is not saved if save toggle is false but saved if true', async () => { 
  let settings = await testUtils.toggleSaveTrue()
  await api
    .post('/calculate/company/save/')
    .send(companyAnswers)
  let companies = await Company.find({ })
  expect(companies.length).toBe(1)
  settings.saveDataToDatabase = false 
  settings.save()
  await api
    .post('/calculate/company/save/')
    .send(companyAnswers)
  companies = await Company.find({ })
  expect(companies.length).toBe(1)
  settings.saveDataToDatabase = true 
  settings.save()
  await api
    .post('/calculate/company/save/')
    .send(companyAnswers)
  companies = await Company.find({ })
  expect(companies.length).toBe(2)
})