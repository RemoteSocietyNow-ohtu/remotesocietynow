const config = require('../../config/common')

const getDatabaseUrl = () => { 
  if (config.inProduction) {
    return config.mongoDbUrl
  } else {
    return config.mongoDbDevUrl
  }  
}

module.exports = { getDatabaseUrl }