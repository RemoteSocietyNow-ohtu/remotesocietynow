require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const User = require('../models/userSchema')
const mock = require('./mockdatabase')
const api = supertest(app)

beforeAll(async () => await mock.connect())

afterEach(async () => await mock.clearDB())

afterAll(async () => await mock.closeAndDrop())

const testUser = {
  username: 'testingtesting',
  password: 'testPassword'
}

const signUpWithTestUserData = async () => {
  return api
    .post('/users/')
    .send(testUser)
}

const loginWithTestUserData = async () => {
  return api
    .post('/users/login/')
    .send(testUser)
}

test('user can sign up', async () => { 
  await api
    .post('/users/')
    .send(testUser)
    .expect(200)
})

test('signing up returns user object with username, passwordhash and role', async () => { 
  const response = await signUpWithTestUserData()    
  expect(response.body.username).toBe(testUser.username)
  expect(response.body.role).toBe('USER')
})

test('user can not sign up with a name already taken', async () => { 
  await signUpWithTestUserData()
  const response = await signUpWithTestUserData()   
  expect(response.body.error).toBeDefined()
})

test('user can log in after signed up', async () => {
  await signUpWithTestUserData() 
  const response = await loginWithTestUserData()
  expect(response.body.token).toBeDefined
  expect(response.body.username).toBe(testUser.username)  
})

test('user can not log in if not signed up', async () => { 
  const response = await loginWithTestUserData()
  expect(response.body.error).toBeDefined()
})

test('user can not log in with wrong password', async () => { 
  await signUpWithTestUserData()
  const response = await api
    .post('/users/login/')
    .send({ username: testUser.username, password: 'totally_wrong_password' })
  expect(response.body.error).toBeDefined()
})

test('user data is saved to database', async () => {
  await signUpWithTestUserData()
  const users = await User.find({ username: testUser.username })
  expect(users.length).toBe(1)
})