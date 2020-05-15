require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const questions = [
  {
    identifyingString:'dailyCommuteKm',
    name: 'Kuinka pitkä työmatkaasi on kilometreinä? Ilmoita matka yhteen suuntaan.',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'km'
  },
  {
    identifyingString:'typicalVehicle',
    name: 'Millä kulkuvälineellä useimmiten kuljet töihin?',
    type: 'multipleChoice',
    options: [
      'walking',
      'bus',
      'train',
      'car',
      'motorcycle'
    ],
  },
  {
    identifyingString:'noOfDaysOfUsage',
    name: 'Kuinka monena päivänä viikossa kuljet tällä kulkuvälineellä töihin?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'päivänä'
  },
  {
    identifyingString:'commuteMethodSecond',
    name: 'Kuljetko jollakin muulla kulkuvälineellä töihin, ja jos kyllä, millä?',
    type: 'multipleChoice',
    options: [
      'walking',
      'bus',
      'train',
      'car',
      'motorcycle'
    ]
  },
  {
    identifyingString:'numberOfRemoteworkDays',
    name: 'Kuinka monena päivänä viikossa keskimäärin teet etätöitä?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'päivänä'
  },
  {
    identifyingString:'opinionRemote',
    name: 'Miten suhtaudut etätyöskentelyyn?',
    type: 'multipleChoice',
    options: [
      'Erittäin kielteisesti',
      'kielteisesti',
      'ei mielipidettä',
      'positiivisesti',
      'erittäin positiivisesti'
    ]
  }
]

app.use(express.static(__dirname + '/frontend/build/'))

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Backend is running!</h1>')
})

app.get('/api/questions/', (req, res) => {
  res.json(questions)
})

app.get('/api/questions/:id', (req, res) => {
  const id = req.params.id
  const question = questions[id]

  res.json(question)
})

app.post('/api/calculate/', (req,res) => {
  console.log(req.body)

  const distance = req.body.dailyCommuteKm
  const days = req.body.noOfDaysOfUsage
  const remoteDays = req.body.numberOfRemoteworkDays
  const vehicle = req.body.typicalVehicle

  const coeficcients = {}

  coeficcients["car"] = 230
  coeficcients["train"] = 2
  coeficcients["bus"] = 59
  coeficcients["walking"] = 0
  coeficcients["motorcycle"] = 94

  const amountOfWorkDoneRemotely = Math.max(1-(remoteDays/days),0)
   
  let co2 = coeficcients[vehicle]*distance*2*221
  const co2remote = coeficcients[vehicle]*distance*2*amountOfWorkDoneRemotely*221

  
  const co2reduce = (co2-co2remote)/1000000
  co2 = co2/1000000

  const result ={
    co2: co2,
    co2reduce: co2reduce
  }
  res.json(result)
})

const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)