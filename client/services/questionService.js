import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const getQuestionsPeople = () => {
  const request = axios.get(`${baseurl}/api/questions/people/`)
  return request.then((res) => res.data)
}

const sendAnswersPeople = ( values ) => {
  const request = axios.post(`${baseurl}/api/calculate/person/`, values)
  return request.then((res) => res.data)
}

const getQuestionsCompany = () => {
  const request = axios.get(`${baseurl}/api/questions/companies/`)
  return request.then((res) => res.data)
}

const sendAnswersCompany = ( values ) => {
  const request = axios.post(`${baseurl}/api/calculate/company/`, values)
  return request.then((res) => res.data)
}

export default { 
  getQuestionsPeople, 
  sendAnswersPeople, 
  getQuestionsCompany, 
  sendAnswersCompany }
