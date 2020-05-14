require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const questions = [
  {
    name:'Kuinka monena päivänä kuukaudessa kuljet töihin omalla autollasi?',
    type:'multipleChoice'
  },
  {
    name:'Kuinka pitkiä työmatkasi keskimäärin ovat (km/aika)?',
    type:'input'
  },
]

app.use(express.static(__dirname + '/frontend/build/'))

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Backend is running!</h1>')
})

app.get('/api/questions', (req, res) => {
  res.json(questions)
})

app.get('/api/questions/:id', (req, res) => {
  const id = req.params.id
  const question = questions[id]

  res.json(question)
})

const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)