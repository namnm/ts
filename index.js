require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  // dont need to ignore just need to match above extensions
  ignore: [p => false],
})
require('./src')
