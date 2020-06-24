require('@babel/polyfill')
const supertest = require('supertest')
const app = require('../index')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema')
const Company = require('../models/companySchema')
const Employee = require('../models/employeeSchema')
const mock = require('./mockdatabase')
const api = supertest(app)
const { companyAnswers } = require('./companyAnswers')
const { peopleAnswers } = require('./peopleAnswers')
const util = require('./testUtils')


beforeAll(async () => await mock.connect())

beforeEach(async () => await util.toggleSaveTrue())

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
    .set('Authorization', `bearer ${token}`)
}

const findUserByUsername = async (username) => {
  return await User.find({ username: username })
}

const sendPeopleAndCompanyAnswersWithUsersToken = async (token) => {
  await api
    .post('/calculate/company/save/')
    .set('Authorization', `bearer ${token}`)
    .send(companyAnswers)

  await api
    .post('/calculate/person/save/')
    .set('Authorization', `bearer ${token}`)
    .send(peopleAnswers)
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

test('users id is linked to their answers when answering while logged in', async () => {
  await signUpWithTestUserData()
  const loggedInData = await loginWithTestUserData()
  const token = loggedInData.body.token

  await sendPeopleAndCompanyAnswersWithUsersToken(token)

  const users = await findUserByUsername(testUser.username)
  const id = users[0].id

  const usersCompanyAnswers = await Company.find({ 'user': `${id}` })
  const usersEmployeeAnswers = await Employee.find({ 'user': `${id}` })

  expect(usersCompanyAnswers.length).toBe(1)
  expect(usersEmployeeAnswers.length).toBe(1)
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

test('users answers are deleted after user deletion', async () => {

  await signUpWithTestUserData()
  const loggedInData = await loginWithTestUserData()
  const token = loggedInData.body.token

  await sendPeopleAndCompanyAnswersWithUsersToken(token)

  const users = await findUserByUsername(testUser.username)
  const id = users[0].id

  await deleteUser(token)

  const usersCompanyAnswers = await Company.find({ 'user': `${id}` })
  const usersEmployeeAnswers = await Employee.find({ 'user': `${id}` })

  expect(usersCompanyAnswers.length).toBe(0)
  expect(usersEmployeeAnswers.length).toBe(0)

})

test('admin can change password', async () => {
  const oldPassword = 'password'
  const newPassword = 'newPassword'
  const response = await util.createUserAndLogin('admin', oldPassword, 'ADMIN')  
  const token = response.body.adminToken
  await api
    .post('/users/change-password/')
    .set('Authorization', `bearer ${token}`)
    .send({ 'password': newPassword })
    .expect(200)
  const updatedUser = await User.findOne({ username: 'admin' })
  const passwordCorrect = await bcrypt.compare(newPassword, updatedUser.passwordHash)
  expect(passwordCorrect).toBe(true)
})

test('non admin user can not change password', async () => {
  const oldPassword = 'password'
  const newPassword = 'newPassword'
  await util.createUserAndLogin('admin', oldPassword, 'ADMIN')
  const response = await util.createUserAndLogin('user', 'usersPassword', 'USER')  
  const token = response.body.token
  await api
    .post('/users/change-password/')
    .set('Authorization', `bearer ${token}`)
    .send({ 'password': newPassword })
    .expect(403)
  const admin = await User.findOne({ username: 'admin' })
  const passwordCorrect = await bcrypt.compare(newPassword, admin.passwordHash)
  expect(passwordCorrect).toBe(false)
})