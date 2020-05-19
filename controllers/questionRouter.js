const questionRouter = require('express').Router()

const questionsPeopleFinnish = [
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

const questionsPeople = [
  {
    identifyingString:'dailyCommuteKm',
    name: 'How long is your one way daily commute?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'km'
  },
  {
    identifyingString:'typicalVehicle',
    name: 'Witch trasportation are you using most often for commuting?',
    type: 'multipleChoice',
    options: [
      {string: 'Walking/Bike', value: 'walking'},
      {string: 'Bus', value: 'bus'},
      {string: 'Train', value: 'train'},
      {string: 'Car', value: 'car'},
      {string: 'Motorcycle', value: 'motorcycle'},
    ],
  },
  {
    identifyingString:'noOfDaysOfUsage',
    name: 'How many days a week you use this transportation for commuting?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days'
  },
  {
    identifyingString:'secondVehicle',
    name: 'Are you using any other trasportation for commuting?',
    type: 'multipleChoice',
    defaultValue: 'walking',
    options: [
      {string: 'Walking/Bike', value: 'walking'},
      {string: 'Bus', value: 'bus'},
      {string: 'Train', value: 'train'},
      {string: 'Car', value: 'car'},
      {string: 'Motorcycle', value: 'motorcycle'},
    ],
  },
  {
    identifyingString:'noOfDaysOfUsageSecond',
    name: 'How many days a week you use this transportation for commuting?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days'
  },
  {
    identifyingString:'numberOfRemoteworkDays',
    name: 'How many days a week you work remotely?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days'
  },
  {
    identifyingString:'opinionRemote',
    name: 'How do you feel abaut working remote?',
    type: 'multipleChoice',
    options: [
      { string: 'very negative', value: 'veryNegative' },
      { string: 'negative', value: 'negative' },
      { string: 'neutral', value: 'neutral' },
      { string: 'positive', value: 'positive' },
      { string: 'very positive', value: 'veryPositive' },
    ]
  }
]

questionRouter.get('/people/', (req, res) => {
  res.json(questionsPeople)
})

questionRouter.get('/people/:id', (req, res) => {
  const id = req.params.id
  const question = questionsPeople[id]

  res.json(question)
})

module.exports = questionRouter
