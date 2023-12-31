const getenv = require('getenv')

module.exports = {
  // Host the server listens on. Default: '0.0.0.0'
  host: getenv.string('SERVER.HOST', '0.0.0.0'),

  // Port the server listens on. Default: 5000
  port: getenv.int('PORT', 5000),

  // Server mode. Can be 'fork' or 'cluster'. Default: 'fork'
  mode: getenv.string('SERVER.MODE', 'fork'),

  // Number of server instances. Default: 1
  instances: getenv.int('SERVER.INSTANCES', 1),

  // Logger configuration. Homepage: https://github.com/expressjs/morgan#readme
  logger: {
    // Define the log format for server logging. Default: 'tiny'
    format: getenv.string('SERVER.LOGGER.FORMAT', 'tiny')
  },

  // CORS configuration. Homepage: https://github.com/expressjs/cors#readme
  cors: {
    // Define CORS options here. For example:
    // origin: 'https://example.com',
    // methods: 'GET,POST,PUT,DELETE',
    // ...
  },

  // Rate Limit configuration. Homepage: https://github.com/express-rate-limit/express-rate-limit#readme
  rateLimit: {
    // Time window in milliseconds for rate limiting. Default: 60 * 1000 = 60000 ms (1 minute)
    windowMs: getenv.int('SERVER.RATE_LIMIT.WINDOW_MS', 60 * 1000),

    // Maximum number of requests allowed within the time window. Default: 1000 requests
    limit: getenv.int('SERVER.RATE_LIMIT.LIMIT', 1000)
  }
}
