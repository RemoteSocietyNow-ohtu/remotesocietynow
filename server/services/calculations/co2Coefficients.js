//Gives the co2 coefficients used in the calculations, energy amounts are random
const co2coefficients = {}
co2coefficients['car'] = 155
co2coefficients['train'] = 10
co2coefficients['bus'] = 53
co2coefficients['walking'] = 0
co2coefficients['no'] = 0
co2coefficients['motorcycle'] = 91

co2coefficients['solar'] = 15
co2coefficients['wind'] = 23
co2coefficients['geothermal'] = 41
co2coefficients['hydrogen'] = 15
co2coefficients['biomass'] = 98
co2coefficients['mixed'] = 124


module.exports = co2coefficients