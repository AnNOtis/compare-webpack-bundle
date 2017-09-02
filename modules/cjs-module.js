var name = 'cjs-module.js'

var cModule = function cModule () {
  console.log('This is ' + name + ' with common.js export syntax')
}

cModule.name = name

module.exports = cModule
