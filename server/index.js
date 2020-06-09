require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const calculationRouter = require('./controllers/calculationRouter')
const questionRouter = require('./controllers/questionRouter')
const newsletterRouter = require('./controllers/newsletterRouter')

app.use('/newsletter/', newsletterRouter)
app.use('/calculate/', calculationRouter)
app.use('/questions/', questionRouter)


module.exports = app
