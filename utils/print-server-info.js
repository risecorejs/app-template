const chalk = require('chalk')

module.exports = (config) => () => {
  const logs = [
    chalk.bold(' Server is running: '),
    chalk.yellow(` - Local URL: http://localhost:${config.server.port}`),
    chalk.green(` - Environment: ${config.envMode}`),
    chalk.cyan(` - Host: ${config.server.host}`),
    chalk.cyan(` - Port: ${config.server.port}`),
    chalk.magenta(` - CORS enabled: ${config.server.cors ? chalk.green('Yes') : chalk.red('No')}`),
    chalk.magenta(` - Rate Limiting enabled: ${config.server.rateLimit ? chalk.green('Yes') : chalk.red('No')}`)
  ]

  logs.forEach((line) => console.log(line))
}
