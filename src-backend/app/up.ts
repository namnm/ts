import '../models' // check for defineModel error

import http from 'http'

import { port } from '../config'
import log from '../dev/log'
import app from './app'

log.info(`App starting with NODE_ENV=${process.env.NODE_ENV}`)

http.createServer(app).listen(port, () => {
  log.info(`Listening on port ${port}`)
})
process.on('uncaughtException', err => {
  log.stack(err)
})
