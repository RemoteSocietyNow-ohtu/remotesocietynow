require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())



app.use(express.static(__dirname + '/frontend/build/'))

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Backend is running!</h1>')
})

app.get('/api/questions/', (req, res) => {
  res.json(questions)
})

const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)