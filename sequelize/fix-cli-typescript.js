const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

// Fix sequelize-cli doesnt support typescript extensions
// Will be run in the postinstall script in package.json
const p = join(__dirname, '../node_modules/sequelize-cli/lib/core/migrator.js')
const f = readFileSync(p, 'utf8').replace('.js$/', '.(j|t)sx?$/')
writeFileSync(p, f, 'utf8')
