const common = require('@root/config/common')

const PORT = process.env.PORT || 3001

module.exports = {
  ...common,
  PORT,
}
