const jwt = require('jsonwebtoken')


const isAdmin = (token) => {

  if (token !== null) {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (decodedToken.role === 'ADMIN')
      return true
  }

  return false
}

module.exports = {
  isAdmin
}