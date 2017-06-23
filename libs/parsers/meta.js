const yamljs = require('yamljs')

function parse (text) {
  const json = yamljs.parse(text)
  return json
}

module.exports = {
  parse
}
