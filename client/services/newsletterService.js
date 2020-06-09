import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const postMailAddress = (address) => {
  const request = axios.post(`${baseurl}/api/newsletter/`, address)  
  return request.then((res) => res.data)
}

export default { postMailAddress }