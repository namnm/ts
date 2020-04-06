try {
  require('dotenv/config')
  require('./babel-register')
  if (process.env.NODE_ENV !== 'production') {
    require('./dev/clearConsole')
    require('./dev/checkCircularDependencies')
  }
  require('./dev/checkDotenvFile')
  require('./app/up')
} catch (err) {
  require('./dev/log').default.stack(err, 'fatal')
}
