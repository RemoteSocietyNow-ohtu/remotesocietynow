import companySchema from '../models/'
import employeeSchema from '../models/'


export const StoreEmployeeData = (typicalVehicle, noOfDaysOfUsage, secondVehicle, noOfDaysOfUsageSecond, dailyCommuteKm,
  dailyCommuteMinutes, numberOfRemoteworkDays, annualCommuteExpenses, opinionRemote, numberOfBusinessTrips, 
  numberOfHoursOnplane) => {
  
  const mongoose = require('mongoose')
  const Employee = mongoose.model('Employee', employeeSchema)
  const storedEmployee = new Employee({
    typicalVehicle: typicalVehicle,
    noOfDaysOfUsage: noOfDaysOfUsage,
    secondVehicle: secondVehicle,
    noOfDaysOfUsageSecond: noOfDaysOfUsageSecond,
    dailyCommuteKm: dailyCommuteKm,
    dailyCommuteMinutes: dailyCommuteMinutes,
    numberOfRemoteworkDays: numberOfRemoteworkDays,
    annualCommuteExpenses: annualCommuteExpenses,
    opinionRemote: opinionRemote,
    numberOfBusinessTrips: numberOfBusinessTrips,
    numberOfHoursOnplane: numberOfHoursOnplane
  })

  const url = `mongodb+srv://remotesocietynow:9aYSpWbLULYHV6vb@cluster0-ffd2w.mongodb.net/remotesocietynowDB?retryWrites=true&w=majority`

  mongoose.connect(url, { useNewUrlParser: true })

  storedEmployee.save().then(response => {
    console.log('employee data saved!');
    mongoose.connection.close();
  })

}

const StoreCompanyData = (numberOfEmployees, officeRentExpenses, otherUpkeepExpenses, averageBusinessTripCost) => {
  
  const mongoose = require('mongoose')
  const Company = mongoose.model('Company', companySchema)
  const storedCompany = new Company({
    numberOfEmployees: numberOfEmployees,
    officeRentExpenses: officeRentExpenses,
    otherUpkeepExpenses: otherUpkeepExpenses,
    averageBusinessTripCost: averageBusinessTripCost,
  })

  const url = `mongodb+srv://remotesocietynow:9aYSpWbLULYHV6vb@cluster0-ffd2w.mongodb.net/remotesocietynowDB?retryWrites=true&w=majority`
  mongoose.connect(url, { useNewUrlParser: true })

  storedCompany.save().then(response => {
    console.log('company saved!');
    mongoose.connection.close();
  })
}

module.exports = {
  storeEmployeeData: storeEmployeeData,
  storeCompanydata: storeCompanyData
}



