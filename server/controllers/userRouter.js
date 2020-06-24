const config = require('../../config/common')
const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const auth = require('../util/userAuthenticator')

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

  const token = jwt.sign(userForToken, config.secret)

  if (user.role === 'ADMIN') {
    res
      .status(200)
      .send({ adminToken: token, username: user.username})
  } else {
    res
      .status(200)
      .send({ token, username: user.username})
  }
})

userRouter.post('/change-password/', async (req, res) => {
  const token = auth.getTokenFrom(req)  
  const isAdmin = await auth.isAdmin(token)
  if (isAdmin === false) {    
    return res.sendStatus(403)
  }  
  try {
    const admin = await User.findOne({ username: 'admin' })
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
    admin.passwordHash = passwordHash    
    await admin.save()
    res.send(admin)    
  } catch {
    res.sendStatus(400)
  }  
})

module.exports = userRouter
