const jwt = require('jsonwebtoken')


const getTokenFrom = req => {

  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    return authorization.substring(7)
  }
  return null
}

const isAdmin = (req) => {

  const token = getTokenFrom(req)

  if (token !== null) {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    console.log(decodedToken)
    if (decodedToken.role === 'ADMIN')
      return true
  }

  return false
}

module.exports = {
  isAdmin
}