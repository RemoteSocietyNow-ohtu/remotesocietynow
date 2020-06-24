import axios from 'axios'

const getCompanyCSV = () => {
  const request = axios.get('/api/files/companyCSV')
  return request.then((res) => res.data)
}

const getEmployeeCSV = () => {
  const request = axios.get('/api/files/employeeCSV')
  return request.then((res) => res.data)
}

const getCompanyFeedbackCSV = () => {
  const request = axios.get('/api/files/companyFeedbackCSV')
  return request.then((res) => res.data)
}

const getEmployeeFeedbackCSV = () => {
  const request = axios.get('/api/files/employeeFeedbackCSV')
  return request.then((res) => res.data)
}


const deleteUser = (token) => {

  const config = {
    headers: { Authorization: `bearer ${token}` },
  }

  const request = axios.post('/api/files/deleteUser', {}, config)
  return request.then((res) => res.data)

}

export default {
  getCompanyCSV,
  getEmployeeCSV,
  getCompanyFeedbackCSV,
  getEmployeeFeedbackCSV,
  deleteUser
}
