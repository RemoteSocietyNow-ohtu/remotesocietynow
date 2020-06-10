const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/userSchema')

userRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    passwordHash,
  })
  console.log('Pyyntö vastaanotettu')
  await user.save()
  console.log('asd')

  response.json(user)
})

module.exports = userRouter