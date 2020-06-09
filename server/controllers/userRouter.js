const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const database = require('../database/database')

userRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = {
    username: body.username,
    passwordHash,
  }

  await database.storeUser(user)

  response.json(user)
})

module.exports = userRouter