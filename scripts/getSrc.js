const https = require('https')
const fs = require('fs')
const AdmZip = require('adm-zip')
const asar = require('asar')

const downloadURL = 'https://desktop.figma.com/mac/Figma.zip'
module.exports.downloadURL = downloadURL
const appDownloadPath = './downloads/app.zip'
module.exports.appDownloadPath = appDownloadPath
const appSrcPath = './downloads/app'
module.exports.appSrcPath = appSrcPath
const asarAppFile = './downloads/app/Figma.app/Contents/Resources/app.asar'
const appDest = './app'

async function getSrc () {
  await downloadApp()
  unzip()
  unpack()
}
module.exports.getSrc = getSrc

function downloadApp () {
  if (fs.existsSync(appDownloadPath)) {
    return
  }
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(appDownloadPath)
    const req = https.get(downloadURL, res => {
      const len = parseInt(res.headers['content-length'], 10)
      const total = len / 1048576 // len in Mb
      let current = 0
      res.on('data', chunk => {
        current += chunk.length
        console.log(`Downloading ${(100.0 * current / len).toFixed(2)}%, ${(current / 1048576).toFixed(2)} Mb/r, Total size: ${total.toFixed(2)} Mb`)
      })
      res.pipe(file)
      file.on('finish', () => {
        console.log('Official app downloaded')
        file.close(resolve)
      })
      req.on('error', err => {
        fs.unlink(appDownloadPath)
        reject(err.message)
      })
    })
  })
}

function unzip () {
  if (fs.existsSync(appSrcPath)) {
    return
  }
  var zip = new AdmZip(appDownloadPath)
  zip.extractAllTo(appSrcPath)
}

function unpack () {
  if (fs.existsSync(appDest)) {
    return
  }
  asar.extractAll(asarAppFile, appDest)
}

