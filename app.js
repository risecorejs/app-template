const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const config = require('./config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(
  rateLimit({
    windowMs: config.server.rateLimit.windowMs,
    limit: config.server.rateLimit.limit
  })
)

const moduleControllers = [
  require('./modules/auth/auth.controller')
  // ...
]

for (const moduleController of moduleControllers) {
  app.use(...moduleController)
}
