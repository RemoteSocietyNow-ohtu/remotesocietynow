import axios from 'axios'

const postMailAddress = (address) => {
  const request = axios.post('/api/newsletter/', address)  
  return request.then((res) => res.data)
}

export default { postMailAddress }