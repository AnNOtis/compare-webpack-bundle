const fs = require('fs')
const path = require('path')
const exampleDirs = require('./helper').exampleDirs

const testFileTemplate = function testFileTemplate (source) {
  fs.writeFileSync(
    path.resolve(__dirname, '../__test__.html'),
    `<html><title>Test Bundle Files</title><body><h1>Open dev console</h1>${source}</body></html>`
  )
}

const processSourceScript = function processSourceScript (bundlePaths) {
  return bundlePaths.map(bundle => {
    const shortenPath = path.relative(process.cwd(), bundle)
    return `<script>
(function () {
  var isFailed = false
  console.group("${shortenPath}")
  try {
    ${fs.readFileSync(bundle)}
  } catch(e) {
    isFailed = true
    console.log('%cFailed!', 'color: #e3534a');
    console.error(e)
  } finally {
    if (!isFailed) { console.log('%cSuccessed!', 'color: #2d9043'); }
    console.groupEnd()
  }
})()
    </script>`
  }).join('\n')
}

const createTestFile = function createTestFile (bundlePaths) {
  testFileTemplate(processSourceScript(bundlePaths))
}

createTestFile(
  exampleDirs()
    .filter(d => !d.includes('dynamic-import') && !d.includes('hmr'))
    .map(f => path.resolve(f, 'bundle.js'))
)
