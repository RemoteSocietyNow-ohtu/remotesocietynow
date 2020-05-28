const questionsPeople = [
  {
    identifyingString:'dailyCommuteKm',
    name: 'How long is your daily one-way commute in kilometers?',
    type: 'field',
    minValue: 0,
    unit: 'km'
  },
  {
    identifyingString:'dailyCommuteMinutes',
    name: 'How many minutes does your daily one-way commute take?',
    type: 'field',
    minValue: 0,
    unit: 'minutes'
  },
  {
    identifyingString:'typicalVehicle',
    name: 'Which transportation do you use most often for commuting?',
    type: 'multipleChoice',
    options: [
      {string: 'Walking/Bike', value: 'walking'},
      {string: 'Bus', value: 'bus'},
      {string: 'Train', value: 'train'},
      {string: 'Car', value: 'car'},
      {string: 'Motorcycle', value: 'motorcycle'},
    ]
  },
  {
    identifyingString:'noOfDaysOfUsage',
    name: 'How many days a week do you use this transportation for commuting?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days'
  },
  {
    identifyingString:'secondVehicle',
    name: 'Do you use any other transportation for commuting?',
    type: 'multipleChoice',
    defaultValue: 'walking',
    options: [
      {string: 'Walking/Bike', value: 'walking'},
      {string: 'Bus', value: 'bus'},
      {string: 'Train', value: 'train'},
      {string: 'Car', value: 'car'},
      {string: 'Motorcycle', value: 'motorcycle'},
    ]
  },
  {
    identifyingString:'noOfDaysOfUsageSecond',
    name: 'How many days a week do you use this transportation for commuting?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days'
  },
  {
    identifyingString:'annualCommuteExpenses',
    name: 'How much do you pay for commuting annually?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'numberOfRemoteworkDays',
    name: 'How many days a week do you work remotely?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days'
  },
  {
    identifyingString:'opinionRemote',
    name: 'How do you feel about remote working?',
    type: 'multipleChoice',
    options: [
      { string: 'very negative', value: 'veryNegative' },
      { string: 'negative', value: 'negative' },
      { string: 'neutral', value: 'neutral' },
      { string: 'positive', value: 'positive' },
      { string: 'very positive', value: 'veryPositive' },
    ]
  },
  {
    identifyingString:'numberOfBusinessTrips',
    name: 'How many two-way business trips by plane do you make annually?',
    type: 'field',
    minValue: 0,
    unit: 'trips'
  },
  {
    identifyingString:'numberOfHoursOnPlane',
    name: 'And during these trips, how many hours do you spend on a plane annually?',
    type: 'field',
    minValue: 0,
    unit: 'hours'
  }
]

module.exports = questionsPeople