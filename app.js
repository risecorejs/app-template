const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const config = require('./config')
const printServerInfo = require('./utils/print-server-info')

const app = express()

// Registering middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(middleware)
// ...

// Enable CORS if configured
if (config.server.cors) {
  app.use(cors(config.server.cors))
}

// Enable rate limiting if configured
if (config.server.rateLimit) {
  app.use(rateLimit(config.server.rateLimit))
}

// Registering shared services
global.$sharedServices = {
  authService: require('./modules/auth/auth.service')
  // service_name: require('./modules/service_name/service_name.service')
  // ...
}

// Registering module controllers
app.use(...require('./modules/auth/auth.controller'))
// app.use(...require('./modules/module_name/module_name.controller'))
// ...

app.listen(config.server.port, config.server.host, printServerInfo(config))
