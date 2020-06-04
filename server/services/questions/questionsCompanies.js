const questionsCompanies = [
  {
    identifyingString:'companyName',
    // eslint-disable-next-line quotes
    name: "Your Company's name",
    type: 'textField'
  },
  {
    identifyingString:'numberOfEmployees',
    name: 'How many employees does your company have?',
    type: 'field',
    minValue: 0,
    unit: 'employees'
  },
  {
    identifyingString:'topCosts',
    name: 'How high are your company\'s monthly office rent expenses?',
    type: 'textField'
  },
  {
    identifyingString:'officeRentExpenses',
    name: 'How high are your company\'s monthly office rent expenses? ',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'otherUpkeepExpenses',
    name: 'How high are your company\'s other office-related costs?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'topEnergyActivities',
    name: 'List your company’s top 5 biggest energy consuming activities? (if you know) ',
    type: 'textField'
  },
  {
    identifyingString:'energyCost',
    name: 'How high is your office energy cost per month?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'energySource',
    name: 'How high is your office energy cost per month?',
    type: 'multipleChoice',
    options: [
      {string: 'Solar energy', value: 'solar'},
      {string: 'Wind energy', value: 'wind'},
      {string: 'Geothermal energy', value: 'geothermal'},
      {string: 'Hydrogen energy', value: 'hydrogen'},
      {string: 'Biomass energy', value: 'biomass'},
      {string: 'Mixed', value: 'mixed'},
    ]
  },
  {
    identifyingString:'heatingCost',
    name: 'How high is your office heating cost per month?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'heatingSource',
    name: 'How high is your office energy cost per month?',
    type: 'multipleChoice',
    options: [
      {string: 'Electricity', value: 'electricity'},
      {string: 'District heating/ cooling', value: 'district'},
      {string: 'Heat pumps', value: 'pumps'},
      {string: 'Oil', value: 'oil'},
      {string: 'Solar heating', value: 'solar'}
    ]
  },
  {
    name: 'How high are your company\'s other office-related costs? ',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'totalCommutingSubsidies',
    name: 'Total commuting subsidies paid to employees per month ',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'averageFlightHours',
    name: 'How many hours does your average employee fly in a month during commuting or business trips?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    name: 'How high are your company\'s other office-related costs? ',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'totalCommutingSubsidies',
    name: 'Total commuting subsidies paid to employees per month ',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'averageFlightHours',
    name: 'How many hours does your average employee fly in a month during commuting or business trips?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'averageCarHours',
    name: 'How many hours does your average employee drive a car in a month during commuting or business trips?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  },
  {
    identifyingString:'shareOfRemoteWork',
    name: 'At present, what share (%) of the company’s total working hours is done remotely?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'100',
    unit: '%'
  },
  {
    identifyingString:'remoteWorkEase',
    name: 'How easily could your company start working fully remotely?',
    type: 'multipleChoice',
    options: [
      {string: 'Very difficult', value: 'veryDifficult'},
      {string: 'Difficult', value: 'difficult'},
      {string: 'Do not know', value: 'doNotKnow'},
      {string: 'Easy', value: 'easy'},
      {string: 'Very Easy', value: 'veryEasy'}
    ]
  },
]

module.exports = questionsCompanies