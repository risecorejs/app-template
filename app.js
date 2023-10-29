const express = require('express')

const middleware = require('./middleware')
const config = require('./config')
const printServerInfo = require('./utils/print-server-info')

const app = express()

// Registering middleware
app.use(middleware)

// Registering shared services
global.$sharedServices = {
  authService: require('./modules/auth/auth.service')
}

// Registering module controllers
app.use(...require('./modules/auth/auth.controller'))

// Start the server and print server information
app.listen(config.server.port, config.server.host, printServerInfo(config))
