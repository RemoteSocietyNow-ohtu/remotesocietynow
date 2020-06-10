import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const signUp = (username, password) => {
  const request = axios.post(`${baseurl}/api/users/`, {'username': username, 'password': password})
  return request.then((res) => res.data)
}

export default {
  signUp,
}
