const yamljs = require('yamljs')

function parse (text) {
  const json = yamljs.parse(text)
  return {
    project: json.project || null,
    version: json.version || null,
    author: json.author || null,
    storys: json.storys || []
  }
}

module.exports = {
  parse
}
