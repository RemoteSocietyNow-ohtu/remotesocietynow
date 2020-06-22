import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const signUp = (username, password) => {
  const request = axios.post(`${baseurl}/api/users/`, {'username': username.toLowerCase(), 'password': password})
  return request.then((res) => res.data)
}

const login = (username, password) => {
  const request = axios.post(`${baseurl}/api/users/login/`, {'username': username.toLowerCase(), 'password': password})
  return request.then((res) => res.data)
}

const logout = (Cookies) => {
  Cookies.remove('token')
  Cookies.remove('adminToken')
  window.location.reload()
}

export default {
  signUp,
  login,
  logout,
}
