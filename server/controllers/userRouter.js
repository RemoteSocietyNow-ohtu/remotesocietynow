const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')

userRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    role: 'USER',
    passwordHash,
  })
  try {
    await user.save()
    response.json(user)
  } catch (ValidationError) {
    return response.json({
      error: 'Username must be unique'
    })
  }
})

userRouter.post('/login/', async (req, res) => {
  const body = req.body

  const user = await User.findOne({ username: body.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return res.json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
    role: user.role
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  res
    .status(200)
    .send({ token, username: user.username})
})

module.exports = userRouter
