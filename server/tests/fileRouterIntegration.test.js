require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const mock = require('./mockdatabase')
const testUtils = require('./testUtils')
const User = require('../models/userSchema')

const api = supertest(app)

beforeAll(async () => await mock.connect())

afterEach(async () => await mock.clearDB())

afterAll(async () => await mock.closeAndDrop())

const downloadAsAdmin = async (url) => {
  const { body } = await testUtils.createUserAndLogin('admin', 'test-password', 'ADMIN')
  const token = body.adminToken
  return await api
    .get(`/files/${url}/${token}/`)    
    .expect(200)
    .expect('Content-Type', 'text/csv')
}

const downloadAsNormalUser = async (url) => {
  const { body } = await testUtils.createUserAndLogin('user', 'test-password', 'USER')
  const token = body.token
  const user = await User.findOne({ username: 'user' })  
  const response = await api
    .get(`/files/${url}/${token}/`)
  return { response, userId: user.id }
}

test('admin can download company data as CSV', async () => { 
  const response = await downloadAsAdmin('companyCSV')
  const hasRightFileName = response.headers['content-disposition'].includes('companydata.csv')
  expect(hasRightFileName).toBe(true)
})

test('non admin user can only download own company data', async () => { 
  const { response, userId } = await downloadAsNormalUser('companyCSV')
  const hasCompanyDataFile = response.headers['content-disposition'].includes('companydata.csv')
  expect(hasCompanyDataFile).toBe(false)
  const hasOwnDataFile = response.headers['content-disposition'].includes(userId)
  expect(hasOwnDataFile).toBe(true)
})

test('admin can download employee data as CSV', async () => { 
  const response = await downloadAsAdmin('employeeCSV')
  const hasRightFileName = response.headers['content-disposition'].includes('employeedata.csv')
  expect(hasRightFileName).toBe(true)
})

test('non admin user can only download own employee data', async () => { 
  const { response, userId } = await downloadAsNormalUser('employeeCSV')    
  const hasCompanyDataFile = response.headers['content-disposition'].includes('companydata.csv')
  expect(hasCompanyDataFile).toBe(false)
  const hasOwnDataFile = response.headers['content-disposition'].includes(userId)
  expect(hasOwnDataFile).toBe(true)
})

test('admin can download employee feedback data as CSV', async () => { 
  const response = await downloadAsAdmin('employeeFeedbackCSV')
  const hasRightFileName = response.headers['content-disposition'].includes('employeeFeedback.csv')
  expect(hasRightFileName).toBe(true)
})

test('admin can download company feedback data as CSV', async () => { 
  const response = await downloadAsAdmin('companyFeedbackCSV')
  const hasRightFileName = response.headers['content-disposition'].includes('companyFeedback.csv')
  expect(hasRightFileName).toBe(true)
})

test('non admin can not download company feedback data as CSV', async () => { 
  const { response } = await downloadAsNormalUser('companyFeedbackCSV')  
  expect(response.text).toBe('Unauthorized')
})

test('non admin can not download employee feedback data as CSV', async () => { 
  const { response } = await downloadAsNormalUser('companyFeedbackCSV')  
  expect(response.text).toBe('Unauthorized')
})

test('can not download files if not a user', async () => {
  let response = await api
    .get('/files/companyCSV/this-is-totally-wrong-token')
  expect(response.text).toBe('Unauthorized')
  response = await api
    .get('/files/companyCSV/')
  expect(response.text).toBe('Unauthorized')

  response = await api
    .get('/files/employeeCSV/this-is-totally-wrong-token')
  expect(response.text).toBe('Unauthorized')
  response = await api
    .get('/files/employeeCSV/')
  expect(response.text).toBe('Unauthorized')

  response = await api
    .get('/files/companyFeedbackCSV/this-is-totally-wrong-token')
  expect(response.text).toBe('Unauthorized')
  response = await api
    .get('/files/companyFeedbackCSV/')
  expect(response.text).toBe('Unauthorized')
  
  response = await api
    .get('/files/employeeFeedbackCSV/this-is-totally-wrong-token')
  expect(response.text).toBe('Unauthorized')
  response = await api
    .get('/files/employeeFeedbackCSV/')
  expect(response.text).toBe('Unauthorized')
})