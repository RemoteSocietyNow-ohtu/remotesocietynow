import axios from 'axios'

const signUp = (username, password) => {
  const request = axios.post('/api/users/', {'username': username.toLowerCase(), 'password': password})
  return request.then((res) => res.data)
}

const login = (username, password) => {
  const request = axios.post('/api/users/login/', {'username': username.toLowerCase(), 'password': password})
  return request.then((res) => res.data)
}

const changePassword = (token, password) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  }
  const request = axios.post('/api/users/change-password/', { 'password': password }, config)
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
  changePassword
}
