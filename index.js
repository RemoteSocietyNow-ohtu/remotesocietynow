require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

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

app.post('/api/calculate/', (req,res) => {
  console.log(req.body)

  const distance = +req.body.dailyCommuteKm
  const days = +req.body.noOfDaysOfUsage
  const remoteDays = +req.body.numberOfRemoteworkDays
  const vehicle = req.body.typicalVehicle
  const secondVehicle = req.body.secondVehicle
  const daysSecond = +req.body.noOfDaysOfUsageSecond

  const coefficients = {}
  coefficients['car'] = 155
  coefficients['train'] = 10
  coefficients['bus'] = 53
  coefficients['walking'] = 0
  coefficients['motorcycle'] = 91
  
  const coefficientOfUser = (days*coefficients[vehicle]+daysSecond*coefficients[secondVehicle])/(days+daysSecond)
  const shareOfWorkDoneAtOffice = Math.max(1-(remoteDays/(days+daysSecond)),0)
  
  let co2 = coefficientOfUser*distance*2*221
  const co2remote = coefficientOfUser*distance*2*shareOfWorkDoneAtOffice*221
  
  const co2reduce = Math.round(((co2-co2remote)/1000 + Number.EPSILON) * 100) / 100
  co2 =  Math.round((co2/1000 + Number.EPSILON) * 100) / 100

  const result ={
    co2: co2,
    co2reduce: co2reduce
  }
  res.json(result)
})

const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)