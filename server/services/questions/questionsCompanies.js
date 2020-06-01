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
    identifyingString:'officeRentExpenses',
    name: 'How high are your company\'s monthly office rent expenses?',
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
    identifyingString:'averageBusinessTripCost',
    name: 'On average, how much does a business trip by an employee cost?',
    type: 'field',
    minValue: 0,
    unit: 'euros'
  }  
]

module.exports = questionsCompanies