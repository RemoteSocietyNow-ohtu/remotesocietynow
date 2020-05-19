const co2Coefficients = require('./co2Coefficients')

const calculateBenefitsForPerson = (distance,days,remoteDays,vehicle,secondVehicle,daysSecond) =>{
      
  const coefficientOfUser = (days*co2Coefficients[vehicle]+daysSecond*co2Coefficients[secondVehicle])/(days+daysSecond)
  const shareOfWorkDoneAtOffice = Math.max(1-(remoteDays/(days+daysSecond)),0)
      
  let co2 = coefficientOfUser*distance*2*221
  const co2remote = coefficientOfUser*distance*2*shareOfWorkDoneAtOffice*221
      
  const co2reduce = Math.round(((co2-co2remote)/1000 + Number.EPSILON) * 100) / 100
  co2 =  Math.round((co2/1000 + Number.EPSILON) * 100) / 100
    
  const result ={
    co2: co2,
    co2reduce: co2reduce
  }

  return(result)
}

module.exports = calculateBenefitsForPerson