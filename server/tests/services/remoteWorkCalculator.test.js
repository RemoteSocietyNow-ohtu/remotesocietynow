const remoteWorkCalculator = require('../../services/calculations/remoteWorkCalculator')

test('emissions of 12 km of commute, 30 min commute time, thrice with car, twice with bus, 600e commute expenses, two remotedays, 2 hours of flying', ()=>{
  const result = remoteWorkCalculator.calculateBenefitsForPerson(12, 30, 3, 2, 'car', 'bus', 600, 2, 2)

  expect(result[0].value).toBe(844.95)
  expect(result[1].value).toBe(242.29)
})
