require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.get('*', function(req, res) {
  res.redirect('https://' + req.headers.host + req.url)
})

const calculationRouter = require('./controllers/calculationRouter')
const questionRouter = require('./controllers/questionRouter')
const newsletterRouter = require('./controllers/newsletterRouter')
const userRouter = require('./controllers/userRouter')
const fileRouter = require('./controllers/fileRouter')

app.use('/newsletter/', newsletterRouter)
app.use('/calculate/', calculationRouter)
app.use('/questions/', questionRouter)
app.use('/users/', userRouter)
app.use('/files/', fileRouter)

module.exports = app
