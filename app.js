const express = require('express')
const { printServerInfo } = require('@risecorejs/app/utils')

const middleware = require('./middleware')
const config = require('./config')

const app = express()

// Registering middleware
app.use(middleware)

// Registering shared services
require('./shared-services')

// Registering module controllers
// app.use.apply(app, require('./modules/<module_name>/<module_name>.controller'))

// Start the server and print server information
app.listen(config.server.port, config.server.host, printServerInfo(config))
