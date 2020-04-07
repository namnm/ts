import compression from 'compression'
import express from 'express'

import graphqlHandler from './app-graphqlHandler'

const app = express()

app.use('/graphql', compression(), graphqlHandler)

export default app
