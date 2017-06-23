const gaze = require('gaze')
const { sync } = require('./utils')

function watch () {
  gaze('**/*.md', function (err, watcher) {
    if (err) throw err
    this.on('all', function (event, filePath) {
      sync(filePath)
    })
  })
}

module.exports = {
  watch
}
