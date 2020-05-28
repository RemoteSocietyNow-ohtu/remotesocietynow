const remoteWorkCalculator = require('../../services/calculations/remoteWorkCalculator')

test('emissions of 12 km of commute, thrice with car, twice with bus, two remotedays', ()=>{
  const result = remoteWorkCalculator.calculateBenefitsForPerson(12,3,2,'car','bus',2)

  expect(result[0].value).toBe(363.43)
  expect(result[1].value).toBe(242.29)
})