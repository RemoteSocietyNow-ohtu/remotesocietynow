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

module.exports = questionsPeople