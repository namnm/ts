// Initialize env and register babel hook for node backend code and scripts
require('dotenv/config')
require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  configFile: './src-backend/babel.config.js',
})
