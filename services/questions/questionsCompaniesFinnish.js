const questionsCompaniesFinnish = [
  {
    identifyingString:'numberOfEmployees',
    name: 'Kuinka monta työntekijää yhtiössänne on?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'työntekijää'
  },
  {
    identifyingString:'officeRentExpenses',
    name: 'Kuinka paljon yhtiönne maksaa toimistovuokraa kuukaudessa?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'euroa'
  },
  {
    identifyingString:'otherUpkeepExpenses',
    name: 'Kuinka paljon yhtiönne maksaa muita toimiston ylläpitokustannuksia?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'euroa'
  },
  {
    identifyingString:'averageBusinessTripCost',
    name: 'Kuinka paljon työntekijän työmatka maksaa keskimäärin?',
    type: 'field',
    defaultValue:'0',
    minValue: 0,
    unit: 'euroa'
  }
]

module.exports = questionsCompaniesFinnish