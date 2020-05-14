import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'

const getQuestions = () => {
  const request = axios.get(`${baseurl}/api/questions/`)
  return request.then((res) => res.data)
}

export default { getQuestions }
