const axios = require('axios')
const loader = require('./file-loader')
const url = 'http://127.0.0.1:3000/updateSelectedStory'

function send (data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(result => resolve(result))
      .catch(e => reject(e))
  })
}

function log (data) {
  console.log(JSON.stringify(data, null, 2))
}

module.exports = {
  sync (filePath) {
    const data = loader.load(filePath)
    log(data)
    send(data)
      .then(info => console.log('update success'))
      .catch(e => console.log('update error'))
  }
}
