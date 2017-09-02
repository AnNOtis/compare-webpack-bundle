var es6Module = require('../../modules/es6-module')
var cjsModule = require('../../modules/cjs-module')

console.log(es6Module.name)
es6Module.default()

console.log(cjsModule.name)
cjsModule()
