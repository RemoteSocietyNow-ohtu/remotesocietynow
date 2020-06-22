import axios from 'axios'

const baseurl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : ''

const setSaveToggle = (token, value) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  }
  const request = axios.post(`${baseurl}/api/settings/`, { saveDataToDatabase: value }, config)
  return request.then((res) => res.data)
}

const getSaveToggleValue = () => { 
  const request = axios.get(`${baseurl}/api/settings/`)
  return request.then((res) => res.data.saveDataToDatabase)
}

export default { setSaveToggle, getSaveToggleValue }
