import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const getCompanyCSV = () => {
  const request = axios.get(`${baseurl}/api/files/companyCSV`)
  return request.then((res) => res.data)
}

const getEmployeeCSV = () => {
  const request = axios.get(`${baseurl}/api/files/employeeCSV`)
  return request.then((res) => res.data)
}

const getCompanyFeedbackCSV = () => {
  const request = axios.get(`${baseurl}/api/files/companyFeedbackCSV`)
  return request.then((res) => res.data)
}

const getEmployeeFeedbackCSV = () => {
  const request = axios.get(`${baseurl}/api/files/employeeFeedbackCSV`)
  return request.then((res) => res.data)
}

export default {
  getCompanyCSV,
  getEmployeeCSV,
  getCompanyFeedbackCSV,
  getEmployeeFeedbackCSV,
}
