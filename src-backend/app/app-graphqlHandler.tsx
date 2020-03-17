import expressGraphql from 'express-graphql';
import { IncomingMessage, ServerResponse } from 'http';

import Context from './Context';
import { customFormatErrorFn } from './ContextError';
import schema, { rootValue } from './schema';

const graphqlHandler = expressGraphql(
  (req: IncomingMessage, res: ServerResponse) => ({
    schema,
    rootValue,
    graphiql: true,
    context: new Context(req, res),
    customFormatErrorFn,
  }),
);

export default graphqlHandler;
