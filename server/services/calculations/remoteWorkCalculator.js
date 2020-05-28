const co2Coefficients = require('./co2Coefficients')

const avgNumberOfWorkDaysInAYear = 221

const calculateEmissionsForVehicle = (vehicle,daysUsed) =>{
  return co2Coefficients[vehicle]*daysUsed
}

const roundEmissionsToKg = (emissions) =>{
  return Math.round((emissions/1000+ Number.EPSILON) * 100) / 100
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
  

  const result = [
    {
      title: 'Annual CO2 pollution',
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
    }
  ]  

  return(result)
}

/** Calculate money savings for company based on calculations at https://docs.google.com/spreadsheets/d/1Webbfedw-tmu-4WKUP6FB50YgrQR_gDCCqT1QPpErhA/edit#gid=103523188
 * (not automatically updated from the spreadsheet)
 */
const calculateBenefitsForCompany = (rent, officeUpkeep, employees, businessTravelCost, remoteShare ) => {
  const expenses = parseInt(rent) + parseInt(officeUpkeep)
  const totalExpenses = expenses * 12
  const moneySaved = remoteShare*totalExpenses/100

  const result = [
    {
      title: 'Annual money used without remote work',
      value: totalExpenses,
      unit: '€',
      bartype: 'hiddenbar',
      percent: 1

    },
    {
      title: 'Potential annual money saved',
      value: moneySaved,
      unit: '€',
      bartype: 'greenbar',
      percent: moneySaved/totalExpenses

    },
    {
      title: 'Annual money used (with remote work)',
      value: totalExpenses - moneySaved,
      unit: '€',
      bartype: 'redbar',
      percent: 1-(moneySaved/totalExpenses)
    },
        
  ]

  return(result)
}

module.exports = {calculateBenefitsForPerson, calculateBenefitsForCompany}