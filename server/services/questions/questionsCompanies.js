const questionsCompanies = [
  {
    identifyingString:'companyName',
    // eslint-disable-next-line quotes
    name: "Your Company's name",
    type: 'text',
    dataType: String
  },
  {
    identifyingString:'numberOfEmployees',
    name: 'How many employees does your company have?',
    type: 'number',
    minValue: 0,
    unit: 'employees',
    dataType: Number
  },
  {
    identifyingString:'topCosts',
    name: 'What are the top 5 types of costs (of all expenses or cash outflows) for your company?',
    type: 'textArea',
    placeholder: 
    `1. Type of cost
    2. Type of cost
    3. Type of cost
    4. Type of cost
    5. Type of cost`,
    unit: 'euros',
    dataType: String
  },
  {
    identifyingString:'officeRentExpenses',
    name: 'How high are your company\'s monthly office rent expenses (€)? ',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'topEnergyActivities',
    name: 'List your company’s top 5 biggest energy consuming activities? (if you know) ',
    placeholder: 
    `1. Type of cost
    2. Type of cost
    3. Type of cost
    4. Type of cost
    5. Type of cost`,
    type: 'textArea',
    dataType: String
  },
  {
    identifyingString:'energyCost',
    name: 'How high is your office energy cost per month (€)?',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'energySource',
    name: 'Which energy source is primarily used in your office(s)?',
    type: 'multipleChoice',
    options: [
      {string: 'Solar energy', value: 'solar'},
      {string: 'Wind energy', value: 'wind'},
      {string: 'Geothermal energy', value: 'geothermal'},
      {string: 'Hydrogen energy', value: 'hydrogen'},
      {string: 'Biomass energy', value: 'biomass'},
      {string: 'Mixed', value: 'mixed'},
    ],
    dataType: String
  },
  {
    identifyingString:'heatingCost',
    name: 'How high is your office’s heating cost per month (€)?',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'heatingSource',
    name: 'How is heating and cooling generated in your company’s office(s)?',
    type: 'multipleChoice',
    options: [
      {string: 'Electricity', value: 'electricity'},
      {string: 'District heating/ cooling', value: 'district'},
      {string: 'Heat pumps', value: 'pumps'},
      {string: 'Oil', value: 'oil'},
      {string: 'Solar heating', value: 'solar'}
    ],
    dataType: String
  },
  {
    identifyingString:'otherUpkeepExpenses',
    name: 'How high are your company\'s other office-related costs (€)? ',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'totalCommutingSubsidies',
    name: 'Total commuting subsidies paid to employees per month (€).',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'averageFlightHours',
    name: 'How many hours does your average employee fly in a month during commuting or business trips?',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'averageCarHours',
    name: 'How many hours does your average employee drive a car in a month during commuting or business trips?',
    type: 'number',
    minValue: 0,
    unit: 'euros',
    dataType: Number
  },
  {
    identifyingString:'shareOfRemoteWork',
    name: 'At present, what share (%) of the company’s total working hours is done remotely?',
    type: 'slider',
    defaultValue:'0',
    minValue:'0',
    maxValue:'100',
    unit: '%',
    dataType: Number
  },
  {
    identifyingString:'remoteWorkEase',
    name: 'How easy would it be for your company to transition to working fully remotely',
    type: 'multipleChoice',
    options: [
      {string: 'Very difficult', value: 'veryDifficult'},
      {string: 'Difficult', value: 'difficult'},
      {string: 'Do not know', value: 'doNotKnow'},
      {string: 'Easy', value: 'easy'},
      {string: 'Very Easy', value: 'veryEasy'}
    ],
    dataType: String
  },
]

module.exports = questionsCompanies