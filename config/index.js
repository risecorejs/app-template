require('dotenv').config()

const getenv = require('getenv')

module.exports = {
  // Environment mode. Default: 'development'
  envMode: getenv.string('NODE_ENV', 'development'),

  // App configuration
  app: require('./app'),

  // Server configuration
  server: require('./server'),

  // Database configuration
  database: require('./database')
}
