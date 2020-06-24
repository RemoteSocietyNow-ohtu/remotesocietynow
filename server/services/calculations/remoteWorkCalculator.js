const co2Coefficients = require('./co2Coefficients')

const avgNumberOfWorkDaysInAYear = 221

const calculateEmissionsForVehicle = (vehicle,daysUsed) =>{
  return co2Coefficients[vehicle]*daysUsed
}

const calculateFlightEmissionsForPerson = (planeHours) => {
  const averagePlaneSpeed = 926
  const averageCo2PerHourFlight = averagePlaneSpeed * co2Coefficients['plane']
  return planeHours * averageCo2PerHourFlight
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
const calculateBenefitsForPerson = (distance, commuteTime, daysFirst,daysSecond,firstVehicle,secondVehicle, monthlyCommuteExpenses, remoteDays, numberOfHoursOnPlane) =>{

  const emissionsOfTheFirstVehicle = calculateEmissionsForVehicle(firstVehicle,daysFirst)
  const emissionsOfTheSecondVehicle = calculateEmissionsForVehicle(secondVehicle,daysSecond)
  const flightEmissions = calculateFlightEmissionsForPerson(numberOfHoursOnPlane)

  const totalEmissions = emissionsOfTheFirstVehicle + emissionsOfTheSecondVehicle

  const totalCommuteDays = daysFirst + daysSecond

  const emissionsOfPersonInDay = totalEmissions/totalCommuteDays

  const shareOfWorkDoneAtOffice = Math.max(1-(remoteDays/totalCommuteDays),0)

  const distanceInDay = distance*2

  const co2Emissions = emissionsOfPersonInDay*distanceInDay*avgNumberOfWorkDaysInAYear + flightEmissions
  const co2EmissionsWithRemoteWorking = Math.min(emissionsOfPersonInDay*distanceInDay*shareOfWorkDoneAtOffice
                                                  *avgNumberOfWorkDaysInAYear + flightEmissions,co2Emissions)
                                                  
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

  const moneySavedPerYear = (remoteDays > (totalCommuteDays) ? 1 : (remoteDays/(totalCommuteDays)))*totalCostPerYear

  const timeSavedPerYear = (commuteTime * 2 * avgNumberOfWorkDaysInAYear * (1 - shareOfWorkDoneAtOffice)) / 60

  const result = [
    {
      title: 'Annual commute, business travel and office related CO2 emissions',
      value: roundEmissionsToKg(co2EmissionsWithRemoteWorking),
      unit: 'kg',
      bartype: 'redbar',
      percent: co2EmissionsWithRemoteWorking/co2Emissions,
      id: 'totalEmissions'
    },
    {
      title: 'Annual CO2 saved by working remotely',
      value: roundEmissionsToKg(reducedEmissions),
      unit: 'kg',
      bartype: 'greenbar',
      percent: 1 - (co2EmissionsWithRemoteWorking/co2Emissions),
      id: 'co2Save'
    },
    {
      title: 'Annual money saved by working remotely',
      value: moneySavedPerYear,
      unit: '€',
      bartype: 'nobar',
      id: 'moneySave'
    },
    {
      title: 'Annual time saved by working remotely',
      value: timeSavedPerYear,
      unit: 'hours',
      bartype: 'timebar',
      id: 'timeSave'
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
  const totalCo2Emissions = remoteShare * ((co2FromCarCommute + energyEmissions) * 12  + flightEmissions) / 100

  const totalExpenses = expenses * 12
  const moneySaved = remoteShare*totalExpenses/100

  const result = [
    {
      title: 'Total money saved per year',
      value: moneySaved,
      unit: '€',
      bartype: 'greenbar',
      percent: moneySaved/totalExpenses,
      id: 'moneySave'
    },
    {
      title: 'Total yearly expenses',
      value: totalExpenses - moneySaved,
      unit: '€',
      bartype: 'redbar',
      percent: 1-(moneySaved/totalExpenses),
      id: 'yearlyExpenses'
    },
    {
      title: 'Total yearly co2 reductions',
      value: roundEmissionsToKg(totalCo2Emissions),
      unit: 'kg',
      bartype: 'nobar',
      id: 'co2Save'
    }
  ]
  return(result)
}

module.exports = {calculateBenefitsForPerson, calculateBenefitsForCompany}