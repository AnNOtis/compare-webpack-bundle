const fs = require('fs')
const path = require('path')

const EXAMPLES_DIR = path.resolve(__dirname, '../examples')

const exampleDirs = () =>
  fs.readdirSync(EXAMPLES_DIR)
  .map(f => path.resolve(EXAMPLES_DIR, f))
  .filter(f => fs.statSync(f).isDirectory())

module.exports = {
  exampleDirs: exampleDirs
}
