require('dotenv').config()

const getenv = require('getenv')

module.exports = {
  // Environment mode. Default: 'development'
  envMode: getenv.string('NODE_ENV', 'development'),

  app: require('./app'),
  server: require('./server'),
  database: require('./database')
}
