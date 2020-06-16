//Gives the co2 coefficients used in the calculations

// COMMUTING & BUSINESS TRIPS, g/km
const co2coefficients = {}
co2coefficients['car'] = 155
co2coefficients['train'] = 10
co2coefficients['bus'] = 53
co2coefficients['walking'] = 0
co2coefficients['no'] = 0
co2coefficients['motorcycle'] = 91
co2coefficients['plane'] = 260 // Europe, short flight

// ELECTRICITY GENERATION, g/MJ
co2coefficients['solar'] = 16
co2coefficients['wind'] = 10
co2coefficients['hydro'] = 24
co2coefficients['biomass'] = 18 //wood pellets
co2coefficients['coal'] = 95
co2coefficients['natgas'] = 55
co2coefficients['nuclear'] = 3
co2coefficients['mixed'] = 39

// HEAT GENERATION, g/MJ
co2coefficients['geothermal'] = 50
co2coefficients['district'] = 43 // on average

module.exports = co2coefficients