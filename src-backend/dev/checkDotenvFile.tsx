import fs from 'fs'
import path from 'path'

import log from './log'

const dotenvPath = path.join(__dirname, '../../.env')

const checkDotenvFile = () => {
  log.fatal(`Missing ${dotenvPath}`, !fs.existsSync(dotenvPath))
}

checkDotenvFile()
