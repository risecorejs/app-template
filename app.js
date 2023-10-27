const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const config = require('./config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

if (config.server.rateLimit) {
  app.use(rateLimit(config.server.rateLimit))
}

void [
  require('./modules/auth/auth.controller')
  // ...
].forEach((moduleController) => app.use(...moduleController))
