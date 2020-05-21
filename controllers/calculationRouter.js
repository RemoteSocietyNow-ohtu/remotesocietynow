const calculationRouter = require('express').Router()
const remoteWorkCalculator = require('../services/calculations/remoteWorkCalculator')


calculationRouter.post('/person', (req,res) => {
  const distance = +req.body.dailyCommuteKm
  const daysFirst = +req.body.noOfDaysOfUsage
  const remoteDays = +req.body.numberOfRemoteworkDays
  const firstVehicle = req.body.typicalVehicle
  const secondVehicle = req.body.secondVehicle
  const daysSecond = +req.body.noOfDaysOfUsageSecond
  
  const result = remoteWorkCalculator.calculateBenefitsForPerson(distance,daysFirst,daysSecond,firstVehicle,secondVehicle,remoteDays)
  res.json(result)
})

calculationRouter.post('/company', (req,res) => {
  const rent = +req.body.officeRentExpenses
  const officeUpkeep = +req.body.otherUpkeepExpenses
  const employees = +req.body.numberOfEmployees
  const businessTravelCost = +req.body.averageBusinessTripCost
  const remoteShare = 30
  
  const result = remoteWorkCalculator.calculateBenefitsForCompany(rent, officeUpkeep, employees, businessTravelCost, remoteShare)
  res.json(result)
})

module.exports = calculationRouter