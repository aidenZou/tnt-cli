const fs = require('fs')
const mdParser = require('./parsers/md')
const metaParser = require('./parsers/meta')
const storyParser = require('./parsers/story')

// 解析 md 文件并返回结构化 JSON 数据
// 失败时返回 null
function load (filePath) {
  try {
    const text = fs.readFileSync(filePath, 'utf8')
    const segments = text.split(/---+/)
    if (segments.length !== 2) {
      return null
    } else {
      const meta = metaParser.parse(segments[0])
      const json = mdParser.parse(segments[1])
      const storys = storyParser.parse(json)
      return { meta, storys }
    }
  } catch (e) {
    return null
  }
}

module.exports = {
  load
}
