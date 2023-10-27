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

// Enable CORS if configured
if (config.server.cors) {
  app.use(cors(config.server.cors))
}

// Enable Rate Limiting if configured
if (config.server.rateLimit) {
  app.use(rateLimit(config.server.rateLimit))
}

// Registering shared services
global.$sharedServices = {
  authService: require('./modules/auth/auth.service')
}

// Registering module controllers
app.use(...require('./modules/auth/auth.controller'))

// Start the server and print server information
app.listen(config.server.port, config.server.host, printServerInfo(config))
