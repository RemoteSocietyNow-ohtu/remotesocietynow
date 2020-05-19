require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const calculatePerson = require('./controllers/calculateperson')

const questions = [
  {
    identifyingString:'dailyCommuteKm',
    name: 'Kuinka pitkä työmatkasi on kilometreinä? Ilmoita matka yhteen suuntaan.',
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
      {string: 'kävellen/pyörällä', value: 'walking'},
      {string: 'bussilla', value: 'bus'},
      {string: 'junalla', value: 'train'},
      {string: 'henkilöautolla', value: 'car'},
      {string: 'moottoripyörällä', value: 'motorcycle'},
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
    identifyingString:'secondVehicle',
    name: 'Kuljetko jollain muulla kulkuvälineellä töihin? Millä?',
    type: 'multipleChoice',
    defaultValue: 'walking',
    options: [
      {string: 'kävellen/pyörällä', value: 'walking'},
      {string: 'bussilla', value: 'bus'},
      {string: 'junalla', value: 'train'},
      {string: 'henkilöautolla', value: 'car'},
      {string: 'moottoripyörällä', value: 'motorcycle'},
    ],
  },
  {
    identifyingString:'noOfDaysOfUsageSecond',
    name: 'Kuinka monena päivänä viikossa kuljet tällä kulkuvälineellä töihin?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'päivänä'
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
      { string: 'erittäin kielteisesti', value: 'very negative' },
      { string: 'kielteisesti', value: 'negative' },
      { string: 'ei mielipidettä', value: 'neutral' },
      { string: 'positiivisesti', value: 'positive' },
      { string: 'erittäin positiivisesti', value: 'very positive' },
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

app.use('/api/calculate/', calculatePerson)

module.exports = app