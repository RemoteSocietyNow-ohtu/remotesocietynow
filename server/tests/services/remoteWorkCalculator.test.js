const remoteWorkCalculator = require('../../services/calculations/remoteWorkCalculator')

test('emissions of 12 km of commute, thrice with car, twice with bus, two remotedays', ()=>{
  const result = remoteWorkCalculator.calculateBenefitsForPerson(12,3,2,'car','bus',2)

  expect(result.co2).toBe(605.72)
  expect(result.co2reduce).toBe(242.29)
})