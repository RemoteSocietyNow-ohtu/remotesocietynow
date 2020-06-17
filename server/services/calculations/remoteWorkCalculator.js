const co2Coefficients = require('./co2Coefficients')

const avgNumberOfWorkDaysInAYear = 221

const calculateEmissionsForVehicle = (vehicle,daysUsed) =>{
  return co2Coefficients[vehicle]*daysUsed
}

const roundEmissionsToKg = (emissions) =>{
  return Math.round((emissions/1000+ Number.EPSILON) * 100) / 100
}

const vehicleDaysPerWeek = (vehicle, firstVehicle, secondVehicle, daysFirst, daysSecond) => {
  return (firstVehicle === vehicle ? daysFirst : secondVehicle === vehicle ? daysSecond : 0)
}

/** Calculate co2 savings for persone based on calculations at https://docs.google.com/spreadsheets/d/1Webbfedw-tmu-4WKUP6FB50YgrQR_gDCCqT1QPpErhA/edit#gid=0
 * (not automatically updated from the spreadsheet)
 */
const calculateBenefitsForPerson = (distance,daysFirst,daysSecond,firstVehicle,secondVehicle,remoteDays) =>{

  const emissionsOfTheFirstVehicle = calculateEmissionsForVehicle(firstVehicle,daysFirst)
  const emissionsOfTheSecondVehicle = calculateEmissionsForVehicle(secondVehicle,daysSecond)
  const totalEmissions = emissionsOfTheFirstVehicle + emissionsOfTheSecondVehicle

  const totalCommuteDays = daysFirst + daysSecond

  const emissionsOfPersonInDay = totalEmissions/totalCommuteDays

  const shareOfWorkDoneAtOffice = Math.max(1-(remoteDays/totalCommuteDays),0)

  const distanceInDay = distance*2

  const co2Emissions = emissionsOfPersonInDay*distanceInDay*avgNumberOfWorkDaysInAYear
  const co2EmissionsWithRemoteWorking = Math.min(emissionsOfPersonInDay*distanceInDay*shareOfWorkDoneAtOffice
                                                  *avgNumberOfWorkDaysInAYear,co2Emissions)
                                                  
  const reducedEmissions = Math.min(co2Emissions - co2EmissionsWithRemoteWorking, co2Emissions)
  
  const seasonalBusTicketPrice = 50
  const busTicketPrice = 3
  const busDaysPerWeek = vehicleDaysPerWeek('bus', firstVehicle, secondVehicle, daysFirst, daysSecond)
  const busCostPerMonth = Math.min(seasonalBusTicketPrice, busDaysPerWeek * busTicketPrice * 2 * 365 / 52)

  const carDaysPerWeek = vehicleDaysPerWeek('car', firstVehicle, secondVehicle, daysFirst, daysSecond)
  const fuelPricePerLiter = 1.4
  const fuelConsumptionPerHundredKm = 7
  const carCostPerYear = carDaysPerWeek * 52 * distance * 2 * fuelConsumptionPerHundredKm / 100 * fuelPricePerLiter

  // We assume that these are local trains

  const seasonalTrainTicketPrice = 90
  const trainTicketPrice = 4
  const trainDaysPerWeek = vehicleDaysPerWeek('train', firstVehicle, secondVehicle, daysFirst, daysSecond)
  const trainCostPerMonth = Math.min(seasonalTrainTicketPrice, trainDaysPerWeek * trainTicketPrice * 2 * 365/52)

  const totalCostPerYear = Math.floor(busCostPerMonth * 12 + carCostPerYear + trainCostPerMonth * 12)

  const moneySavedPerYear = (remoteDays > (daysFirst+daysSecond) ? 1 : (remoteDays/(daysFirst+daysSecond)))*totalCostPerYear

  const result = [
    {
      title: 'Annual commute and office related CO2 emissions',
      value: roundEmissionsToKg(co2EmissionsWithRemoteWorking),
      unit: 'kg',
      bartype: 'redbar',
      percent: co2EmissionsWithRemoteWorking/co2Emissions
    },
    {
      title: 'Annual CO2 saved by working remotely',
      value: roundEmissionsToKg(reducedEmissions),
      unit: 'kg',
      bartype: 'greenbar',
      percent: 1 - (co2EmissionsWithRemoteWorking/co2Emissions)
    },
    {
      title: 'Annual money saved by working remotely',
      value: moneySavedPerYear,
      unit: '€',
      bartype: 'nobar'
    }
  ]  

  return(result)
}

/** Calculate money savings for company based on calculations at https://docs.google.com/spreadsheets/d/1Webbfedw-tmu-4WKUP6FB50YgrQR_gDCCqT1QPpErhA/edit#gid=103523188
 * (not automatically updated from the spreadsheet)
 */
const calculateBenefitsForCompany = (rent, officeUpkeep, employees, remoteShare, averageCarHours, energyCost, energySource, averageFlightHours, totalCommutingSubsidies) => {
  const expenses = parseInt(rent) + parseInt(officeUpkeep) + parseInt(totalCommutingSubsidies)

  const kWhToMJConversionFactor = 3.6
  const energyPriceEuroPerKWh = 0.05
  const energyAmountInMJ = energyCost / energyPriceEuroPerKWh / kWhToMJConversionFactor
  const energyEmissions = (energySource !== '' && !energyAmountInMJ.isNaN) ? energyAmountInMJ * co2Coefficients[energySource] : 0

  const averageCo2PerKmByCar = co2Coefficients['car']
  const averageCarSpeed = 45
  const averagePlaneSpeed = 926
  const averageCo2PerHourFlight = averagePlaneSpeed * co2Coefficients['plane']
  const flightEmissions = employees * averageCo2PerHourFlight * averageFlightHours
  const averageCo2PerHourByCar = averageCo2PerKmByCar * averageCarSpeed
  const co2FromCarCommute = employees * averageCo2PerHourByCar * averageCarHours
  const totalCo2Emissions = remoteShare * (co2FromCarCommute + energyEmissions + flightEmissions) * 12 / 100

  const totalExpenses = expenses * 12
  const moneySaved = remoteShare*totalExpenses/100

  console.log('employees', employees)
  console.log('energyAmountInMJ', energyAmountInMJ)
  console.log('energyCost', energyCost)
  console.log('energySource', energySource) // toimii
  console.log('co2Coefficients[energySource]', co2Coefficients[energySource]) // toimii
  console.log('energyEmissions', energyEmissions) // pitäisi olla 5.5 MJ * 95 g/MJ = 527.78
  console.log('averageCo2PerKmByCar', averageCo2PerKmByCar) // ok
  console.log('averageCo2PerHourFlight', averageCo2PerHourFlight) // ok
  console.log('flightEmissions', flightEmissions) // ok
  console.log('averageCo2PerHourByCar', averageCo2PerHourByCar) // ok
  console.log('co2FromCarCommute', co2FromCarCommute)
  console.log('remoteShare', remoteShare) 
  console.log('totalCo2Emissions', totalCo2Emissions)
  console.log('totalExpenses', totalExpenses)
  console.log('moneySaved', moneySaved)

  const result = [
    {
      title: 'Total money saved per year',
      value: moneySaved,
      unit: '€',
      bartype: 'greenbar',
      percent: moneySaved/totalExpenses
    },
    {
      title: 'Total yearly expenses',
      value: totalExpenses - moneySaved,
      unit: '€',
      bartype: 'redbar',
      percent: 1-(moneySaved/totalExpenses)
    },
    {
      title: 'Total yearly co2 reductions',
      value: roundEmissionsToKg(totalCo2Emissions),
      unit: 'kg',
      bartype: 'nobar'
    }
  ]
  return(result)
}

module.exports = {calculateBenefitsForPerson, calculateBenefitsForCompany}