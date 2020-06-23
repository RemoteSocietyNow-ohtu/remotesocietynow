require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const User = require('../models/userSchema')
const Company = require('../models/companySchema')
const Employee = require('../models/companySchema')
const mock = require('./mockdatabase')
const api = supertest(app)
const { companyAnswers, companyAnswersAllCommentFieldsEmpty } = require('./companyAnswers')
const { peopleAnswers, peopleAnswersAllCommentFieldsEmpty } = require('./peopleAnswers')

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

const deleteUser = async (token) => {
  return api
  .post('/files/deleteUser')
  .set('Authorization', `bearer ${token}` )
}

const findUserByUsername = async (username) => {
  return await User.find({ username: username })
}

const sendPeopleAndCompanyAnswersWithUsersToken = async (token) => {
  await api
  .post('/calculate/company/save/')
  .send(companyAnswers)
  .set('Authorization', `bearer ${token}` )

  await api
  .post('/calculate/person/save/')
  .send(peopleAnswers)
  .set('Authorization', `bearer ${token}` )
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
  const users = await findUserByUsername(testUser.username)
  expect(users.length).toBe(1)
})

test('users id is linked to their answers when answering while logged in', async() => {
  await signUpWithTestUserData()
  const loggedInData = await loginWithTestUserData()
  const token = loggedInData.body.token

  await sendPeopleAndCompanyAnswersWithUsersToken(token)

  const id = await findUserByUsername(testUser.username).id

  const usersCompanyAnswers = await Company.find({'user': `${id}`})

  expect(usersCompanyAnswers.length).toBe(1)

})

test('user cannot login after deletion', async () => {
  await signUpWithTestUserData()
  const loginData = await loginWithTestUserData()
  const token = loginData.body.token

  await deleteUser(token)

  const loginDataAfterDeletion = await loginWithTestUserData()
  expect(loginDataAfterDeletion.body.error).toBeDefined()
})

test('users login data is deleted after deletion', async () => {
  await signUpWithTestUserData()

  const loginData = await loginWithTestUserData()
  const token = loginData.body.token

  await deleteUser(token)

  const users = await findUserByUsername(testUser.username)
  expect(users.length).toBe(0)
})
