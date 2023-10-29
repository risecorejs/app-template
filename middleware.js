const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const config = require('./config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable Logger if configured
if (config.server.logger) {
  app.use(morgan(config.server.logger.format))
}

// Enable CORS if configured
if (config.server.cors) {
  app.use(cors(config.server.cors))
}

// Enable Rate Limiting if configured
if (config.server.rateLimit) {
  app.use(rateLimit(config.server.rateLimit))
}

module.exports = app
