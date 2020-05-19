const calculationRouter = require('express').Router()


calculationRouter.post('/person', (req,res) => {
  console.log(req.body)
  
  const distance = +req.body.dailyCommuteKm
  const days = +req.body.noOfDaysOfUsage
  const remoteDays = +req.body.numberOfRemoteworkDays
  const vehicle = req.body.typicalVehicle
  const secondVehicle = req.body.secondVehicle
  const daysSecond = +req.body.noOfDaysOfUsageSecond
  
  const coefficients = {}
  coefficients['car'] = 155
  coefficients['train'] = 10
  coefficients['bus'] = 53
  coefficients['walking'] = 0
  coefficients['motorcycle'] = 91
    
  const coefficientOfUser = (days*coefficients[vehicle]+daysSecond*coefficients[secondVehicle])/(days+daysSecond)
  const shareOfWorkDoneAtOffice = Math.max(1-(remoteDays/(days+daysSecond)),0)
    
  let co2 = coefficientOfUser*distance*2*221
  const co2remote = coefficientOfUser*distance*2*shareOfWorkDoneAtOffice*221
    
  const co2reduce = Math.round(((co2-co2remote)/1000 + Number.EPSILON) * 100) / 100
  co2 =  Math.round((co2/1000 + Number.EPSILON) * 100) / 100
  
  const result ={
    co2: co2,
    co2reduce: co2reduce
  }
  res.json(result)
})

module.exports = calculationRouter