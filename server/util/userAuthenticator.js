const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')

const getTokenFrom = req => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

const isAdmin = async (token) => {

  if (token !== null) {
    let decodedToken = null
    try {
      decodedToken = jwt.verify(token, process.env.SECRET)
    } catch (e) {
      console.log(e)
      return false
    }
    const id = decodedToken.id

    const user = await User.findById(id)

    if (user.role === 'ADMIN') {
      return true
    }
  }
  return false
}

const decodeToken = (token) => {
  let decodedToken = null
  try{
    decodedToken = jwt.verify(token,process.env.SECRET)
  }catch (e){
    console.log(e)
    return null
  }
  return decodedToken
}
 
module.exports = {
  isAdmin,
  decodeToken,
  getTokenFrom
}