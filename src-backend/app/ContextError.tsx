import { formatError, GraphQLError } from 'graphql';

import log from '../dev/log';
import Context from './Context';

// A custom error class to distinguish with
//    other unhandled errors in app/graphqlHandler.formatError
const contextErrorPrefix = 'ContextError.';
class ContextError extends Error {
  constructor(key: string) {
    super(contextErrorPrefix + key);
  }
}

const customFormatErrorFn = (err: GraphQLError) => {
  const res = { ...formatError(err) };
  if (res.message.startsWith(contextErrorPrefix)) {
    res.message = res.message.replace(contextErrorPrefix, '');
  } else if (err.originalError) {
    res.message = 'internalServer';
    log.stack(err.originalError);
  }
  return res;
};

function throwContextError(this: Context, key: string, condition = true) {
  if (condition) {
    throw new ContextError(key);
  }
}

export { customFormatErrorFn, throwContextError };
