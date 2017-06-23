const marked = require('marked')

function analyse (text) {
  const tokens = marked.lexer(text)
  console.log(tokens)
  // const result = marked.parser(tokens)
  // console.log(result)
}

module.exports = {
  analyse
}
