import { IncomingMessage, ServerResponse } from 'http'

import {
  getLoginCookie,
  removeLoginCookie,
  setLoginCookie,
} from './Context-loginCookie'
import { throwContextError } from './ContextError'

class Context {
  constructor(
    protected req: Readonly<IncomingMessage>,
    protected res: Readonly<ServerResponse>,
  ) {}

  throw = throwContextError.bind(this)

  setLoginCookie = setLoginCookie.bind(this)
  getLoginCookie = getLoginCookie.bind(this)
  removeLoginCookie = removeLoginCookie.bind(this)
}

export default Context
