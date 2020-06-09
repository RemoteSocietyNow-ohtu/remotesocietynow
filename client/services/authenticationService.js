import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const signUp = (username, password) => {
  const request = axios.get(`${baseurl}/api/users/`, username, password)
  return request.then((res) => res.data)
}

export default {
  signUp,
}
