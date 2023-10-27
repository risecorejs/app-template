const pm2 = require('pm2')

const config = require('./config')

pm2.connect((err) => {
  if (err) {
    console.error(err)

    process.exit(2)
  }

  pm2.start(
    {
      script: 'app.js',
      name: config.app.name,
      exec_mode: config.server.mode,
      instances: config.server.instances
    },
    (err) => {
      if (err) {
        console.error(err)
      }

      pm2.disconnect()
    }
  )
})
