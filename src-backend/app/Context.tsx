import { IncomingMessage, ServerResponse } from 'http';

import {
  getLoginCookie,
  removeLoginCookie,
  setLoginCookie,
} from './Context-loginCookie';
import { throwContextError } from './ContextError';

class Context {
  constructor(
    protected req: Readonly<IncomingMessage>,
    protected res: Readonly<ServerResponse>,
  ) {}

  throw = throwContextError;

  setLoginCookie = setLoginCookie;
  getLoginCookie = getLoginCookie;
  removeLoginCookie = removeLoginCookie;
}

export default Context;
