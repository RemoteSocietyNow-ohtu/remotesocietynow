//Gives the co2 coefficients used in the calculations

// COMMUTING, grams per kilometer
const co2coefficients = {}
co2coefficients['car'] = 155
co2coefficients['train'] = 10
co2coefficients['bus'] = 53
co2coefficients['walking'] = 0
co2coefficients['no'] = 0
co2coefficients['motorcycle'] = 91

// ELECTRICITY GENERATION, grams per MJ
co2coefficients['solar'] = 16
co2coefficients['wind'] = 10
co2coefficients['biomass'] = 18 //wood pellets
co2coefficients['natgas'] = 55
co2coefficients['mixed'] = 39
co2coefficients['hydropower'] = 1 // very rough estimate
co2coefficients['coal'] = 95 // bituminous coal


// HEAT GENERATION, grams per MJ
co2coefficients['geothermal'] = 50
co2coefficients['district'] = 43 // on average


module.exports = co2coefficients