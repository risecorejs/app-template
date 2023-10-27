const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const config = require('./config')
const printServerInfo = require('./utils/print-server-info')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (config.server.cors) app.use(cors(config.server.cors))
if (config.server.rateLimit) app.use(rateLimit(config.server.rateLimit))

void [
  require('./modules/auth/auth.controller')
  // ...
].forEach((moduleController) => app.use(...moduleController))

app.listen(config.server.port, config.server.host, printServerInfo(config))
