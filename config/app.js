const getenv = require('getenv')

module.exports = {
  // Application name. Default: '@risecorejs/app-template'
  name: getenv.string('APP.NAME', '@risecorejs/app-template')
}
