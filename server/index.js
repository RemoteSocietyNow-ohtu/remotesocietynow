require('dotenv').config()
const express = require('express')
const app = express()
const database = require('./database/database')
database.connectToDatabase()

app.use(express.json())

const calculationRouter = require('./controllers/calculationRouter')
const questionRouter = require('./controllers/questionRouter')
const userRouter = require('./controllers/userRouter')

app.use('/calculate/', calculationRouter)
app.use('/questions/', questionRouter)
app.use('/users/', userRouter)

module.exports = app
