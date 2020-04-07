// To prevent the script from running in production env
// Will be run in the drop script in package.json
if (process.env.NODE_ENV === 'production') {
  throw new Error('Can not run in production env')
}
