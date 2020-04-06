import { bold } from 'colors/safe'
import stacktrace from 'stack-trace'

import cleanError, { getLocation } from './cleanError'
import getTimeStamp from './getTimeStamp'
import { getColorFnByLevel, getLabelByLevel, Level } from './Level'

class Log {
  timezone: number = new Date().getTimezoneOffset() / 60

  private createLogFn = (lv: Level) => (msg: string, condition = true) =>
    condition && this.println(lv, msg)

  private println = (lv: Level, msg: string) => {
    const now = getTimeStamp(this.timezone)
    const lbl = getLabelByLevel(lv)
    let loc = getLocation(stacktrace.get()[2])
    if (loc) {
      loc = ' ' + loc
    }
    const prefix = `${now} ${lbl}${loc}:`
    msg = `${prefix} ${bold(msg)}`

    const colorFn = getColorFnByLevel(lv)
    if (colorFn) {
      msg = colorFn(msg)
    }

    if (lv === 'error' || lv === 'fatal') {
      console.error(msg)
    } else {
      console.log(msg)
    }

    if (lv === 'fatal') {
      process.exit(1)
    }
  }

  debug = this.createLogFn('debug')
  info = this.createLogFn('info')
  warn = this.createLogFn('warn')
  error = this.createLogFn('error')
  fatal = this.createLogFn('fatal')

  stack = (err: Error, lv: Level = 'error') =>
    err && this.println(lv, cleanError(err))
}

export default Log
