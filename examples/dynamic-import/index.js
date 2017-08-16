import('../../modules/es6-module').then(es6Module => {
  console.group('loaded dynamic module ')
  console.log(es6Module.name)
  es6Module.default()
  console.groupEnd()
})
