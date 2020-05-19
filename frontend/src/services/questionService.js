import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const getQuestions = () => {
  const request = axios.get(`${baseurl}/api/questions/people/`)
  return request.then((res) => res.data)
}

const sendAnswers = ( values ) => {
  const request = axios.post(`${baseurl}/api/calculate/person/`, values)
  return request.then((res) => res.data)
}

export default { getQuestions, sendAnswers }
