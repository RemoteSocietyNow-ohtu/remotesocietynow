const questionsPeople = [
  {
    identifyingString:'dailyCommuteKm',
    name: 'How long is your daily one-way commute in kilometers?',
    type: 'number',
    minValue: 0,
    unit: 'km',
    dataType: Number
  },
  {
    identifyingString:'dailyCommuteMinutes',
    name: 'How many minutes does your daily one-way commute take?',
    type: 'number',
    minValue: 0,
    unit: 'minutes',
    dataType: Number
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
    ],
    dataType: String
  },
  {
    identifyingString:'noOfDaysOfUsage',
    name: 'How many days a week do you use this transportation for commuting?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days',
    dataType: Number
  },
  {
    identifyingString:'secondVehicle',
    name: 'Do you use any other transportation for commuting?',
    type: 'multipleChoice',
    defaultValue: 'no',
    options: [
      {string: 'No other transportation', value: 'no'},
      {string: 'Walking/Bike', value: 'walking'},
      {string: 'Bus', value: 'bus'},
      {string: 'Train', value: 'train'},
      {string: 'Car', value: 'car'},
      {string: 'Motorcycle', value: 'motorcycle'},
    ],
    dataType:String
  },
  {
    identifyingString:'noOfDaysOfUsageSecond',
    name: 'How many days a week do you use this transportation for commuting?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days',
    dataType: Number
  },
  {
    identifyingString:'monthlyCommuteExpenses',
    name: 'How much do you pay for commuting monthly?',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'numberOfRemoteworkDays',
    name: 'How many days a week do you work remotely?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'7',
    unit: 'days',
    dataType: Number
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
    ],
    dataType: String
  },
  {
    identifyingString:'numberOfHoursOnPlane',
    name: 'How many hours do you spend on a plane on business trips annually?',
    type: 'number',
    minValue: 0,
    unit: 'hours',
    dataType: Number
  },
  {
    identifyingString:'howWouldYouChangeWorkArrangements',
    name:'If you had a superpower, what would you change in your company\'s work arrangements? And how?',
    type: 'textArea',
    dataType: String
  }
]

module.exports = questionsPeople