require('@babel/polyfill')
const supertest = require('supertest')
const User = require('../models/userSchema')
const AdminSettings = require('../models/AdminSettingsSchema')
const bcrypt = require('bcrypt')
const app = require('../index')
const api = supertest(app)

const createUserAndLogin = async (username, password, role) => {
  const pswrd = await bcrypt.hash(password, 2)
  const user = new User({
    username: username,
    passwordHash: pswrd,
    role: role
  })
  await user.save()  
  return await api
    .post('/users/login/')
    .send({ 'username': username, 'password': password })  
}

const toggleSaveTrue = async () => {
  const newSettings = new AdminSettings( { saveDataToDatabase: true })
  return await newSettings.save()
}

module.exports = { createUserAndLogin, toggleSaveTrue }