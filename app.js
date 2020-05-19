require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const calculationRouter = require('./controllers/calculationRouter')
const questionRouter = require('./controllers/questionRouter')

app.use(express.static(__dirname + '/frontend/build/'))

const cors = require('cors')
app.use(cors())

app.use('/api/calculate/', calculationRouter)
app.use('/api/questions/', questionRouter)

module.exports = app
