const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')


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

module.exports = {
  isAdmin
}