const axios = require('axios')

function send (url, data) {
  console.log(data)
  return new Promise((resolve, reject) => {
    axios.get(url, data)
      .then(result => resolve(result))
      .catch(e => reject(e))
  })
}

module.exports = {
  send
}
