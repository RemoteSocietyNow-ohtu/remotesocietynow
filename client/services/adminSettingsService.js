import axios from 'axios'

const setSaveToggle = (token, value) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  }
  const request = axios.post('/api/settings/', { saveDataToDatabase: value }, config)
  return request.then((res) => res.data)
}

const getSaveToggleValue = () => { 
  const request = axios.get('/api/settings/')
  return request.then((res) => res.data.saveDataToDatabase)
}

export default { setSaveToggle, getSaveToggleValue }
