const getenv = require('getenv')

module.exports = {
  // Application name. Default: '@risecorejs/app'
  name: getenv.string('APP.NAME', '@risecorejs/app')
}
