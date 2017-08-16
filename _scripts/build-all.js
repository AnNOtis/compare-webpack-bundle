const path = require('path')
const webpack = require('webpack')

const exampleDirs = require('./helper').exampleDirs

webpack(
  exampleDirs().map(d => require(path.resolve(d, 'webpack.config.js')))
).run(() => console.log('Build success.'))
