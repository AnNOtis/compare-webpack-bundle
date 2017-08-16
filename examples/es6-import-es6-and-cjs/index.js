import es6Module, { name as es6ModuleName } from '../../modules/es6-module'
import cjsModule from '../../modules/cjs-module'

console.log(es6ModuleName)
es6Module()

console.log(cjsModule.name)
cjsModule()
