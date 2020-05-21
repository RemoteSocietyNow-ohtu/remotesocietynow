const co2Coefficients = require('./co2Coefficients')

const avgNumberOfWorkDaysInAYear = 221

const calculateEmissionsForVehicle = (vehicle,daysUsed) =>{
  return co2Coefficients[vehicle]*daysUsed
}

const roundEmissionsToKg = (emissions) =>{
  return Math.round((emissions/1000+ Number.EPSILON) * 100) / 100
}

const calculateBenefitsForPerson = (distance,daysFirst,daysSecond,firstVehicle,secondVehicle,remoteDays) =>{

  const emissionsOfTheFirstVehicle = calculateEmissionsForVehicle(firstVehicle,daysFirst)
  const emissionsOfTheSecondVehicle = calculateEmissionsForVehicle(secondVehicle,daysSecond)
  const totalEmissions = emissionsOfTheFirstVehicle + emissionsOfTheSecondVehicle

  const totalCommuteDays = daysFirst + daysSecond

  const emissionsOfPersonInDay = totalEmissions/totalCommuteDays

  const shareOfWorkDoneAtOffice = 1-(remoteDays/totalCommuteDays)

  const distanceInDay = distance*2

  const co2Emissions = emissionsOfPersonInDay*distanceInDay*avgNumberOfWorkDaysInAYear
  const co2EmissionsWithRemoteWorking = emissionsOfPersonInDay*distanceInDay*shareOfWorkDoneAtOffice*avgNumberOfWorkDaysInAYear
  const reducedEmissions = co2Emissions - co2EmissionsWithRemoteWorking

  const result = [
    {
      title: 'Annual CO2 pollution',
      value: roundEmissionsToKg(co2Emissions),
      unit: 'kg'
    },
    {
      title: 'Annual CO2 saved by working remotely',
      value: roundEmissionsToKg(reducedEmissions),
      unit: 'kg'
    }
  ]  

  return(result)
}

const calculateBenefitsForCompany = (rent, officeUpkeep, employees, businessTravelCost, remoteShare ) => {
  const totalExpenses = (rent + officeUpkeep) * 12
  const moneySaved = remoteShare*totalExpenses/100
  
  const result = [
    {
      title: 'Annual money used',
      value: totalExpenses,
      unit: '€'
    },
    {
      title: 'Annual money saved',
      value: moneySaved,
      unit: '€'
    }
  ]

  return(result)
}

module.exports = {calculateBenefitsForPerson, calculateBenefitsForCompany}