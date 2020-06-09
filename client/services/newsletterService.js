import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const postMailAddress = () => {
  const request = axios.get(`${baseurl}/api/newsletter/`)  
  return request.then((res) => res.data)
}

export default { postMailAddress }