const fs = require('fs')
const path = require('path')
const exampleDirs = require('./helper').exampleDirs

const testFileTemplate = function testFileTemplate (source) {
  fs.writeFileSync(
    path.resolve(__dirname, '../__test__.html'),
    `<html><title>Test Bundle Files</title><body>${source}</body></html>`
  )
}

const processSourceScript = function processSourceScript (bundlePaths) {
  return bundlePaths.map(bundle => {
    const shortenPath = path.relative(process.cwd(), bundle)
    return `<script>
      console.group("${shortenPath}")
      try {
        ${fs.readFileSync(bundle)}
      } catch(e) {
        console.error(e)
      } finally {
        console.groupEnd()
      }
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
