const getenv = require('getenv')

module.exports = {
  // Database dialect. Default: 'postgres'
  dialect: getenv.string('DATABASE.DIALECT', 'postgres'),

  // Database host. Default: 'localhost'
  host: getenv.string('DATABASE.HOST', 'localhost'),

  // Database port. Default: 5432
  port: getenv.int('DATABASE.PORT', 5432),

  // Database name. Default: ''
  name: getenv.string('DATABASE.NAME', ''),

  // Database username. Default: ''
  username: getenv.string('DATABASE.USERNAME', ''),

  // Database password. Default: ''
  password: getenv.string('DATABASE.PASSWORD', ''),

  // Database logging. Default: false
  logging: getenv.bool('DATABASE.LOGGING', false)
}
