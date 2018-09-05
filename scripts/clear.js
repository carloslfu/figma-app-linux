const rimraf = require('rimraf')
const fs = require('fs')

const { appDownloadPath, appSrcPath } = require('./build')

module.exports = function clear () {
  if (fs.existsSync(appDownloadPath)) {
    fs.unlinkSync(appDownloadPath)
  }
  if (fs.existsSync(appSrcPath)) {
    rimraf.sync(appSrcPath)
  }
}
