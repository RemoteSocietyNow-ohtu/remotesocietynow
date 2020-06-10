const getDatabaseUrl = () => { 
  switch (process.env.NODE_ENV) {
  case 'test':
    return process.env.MONGODB_TEST_URI
  case 'production':
    return process.env.MONGODB_URI
  default:
    return process.env.MONGODB_DEV_URI
  }
}

module.exports = { getDatabaseUrl }