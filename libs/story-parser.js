// 获取 Task 完成状态
function getStatus (text) {
  const pattern = new RegExp(/^\[(a|x|\s?)\]/)
  if (pattern.test(text)) {
    const statusText = text.match(pattern)[0]
    switch (statusText[1]) {
      case ' ':
        return 'pending'
      case ']':
        return 'pending'
      case 'x':
        return 'done'
      case 'a':
        return 'active'
      default:
        return 'pending'
    }
  } else return 'pending'
}

// 获取 Task 全半角冒号后的附加内容
function getTail (text) {
  const tmp = text.split(/(:|：)/)
  if (tmp.length === 1) return null
  else {
    // 移除头部文本描述及冒号
    return tmp.filter((text, i) =>
      i === 0
        ? false
        : (text !== ':' && text !== '：')
    ).join('')
  }
}

// 获取 Task 附加内容中的排期字段
function getTiming (text) {
  if (!text) return []
  else {
    // 移除 float 与空白
    const timingText = text.replace(/float/, '').replace(/\s+/g, '')
    const timings = timingText.split('-')
    // 校验字段合法性
    const pattern = new RegExp(/^(\d|\.)+\d*(h|d)$/)
    return timings.every(str => pattern.test(str))
      ? timings
      : []
  }
}

// 获取 Task 是否浮动
function getFloat (text) {
  return text
    ? new RegExp(/float/).test(text)
    : false
}

// 获取子 Task 中备注信息
function getMemo (list) {
  let blame = null
  let after = null
  const blamePattern = new RegExp(/^blame(\s)+/)
  const afterPattern = new RegExp(/^after(\s)+/)
  list.forEach(li => {
    if (blamePattern.test(li)) blame = li.replace(blamePattern, '')
    if (afterPattern.test(li)) after = li.replace(afterPattern, '')
  })
  return { blame, after }
}

// 解析单条 Task 字段内容
function parseTask (task) {
  const text = task.text
  const status = getStatus(text)
  const tailText = getTail(text)
  const timing = getTiming(tailText)
  const isFloat = getFloat(tailText)
  const { after, blame } = getMemo(task.children)
  return { status, timing, isFloat, after, blame }
}

// 由 Story JSON 结构解析 Task 信息
function parse (storys) {
  storys.forEach(story => {
    const tasks = story.tasks
    const result = tasks.map(parseTask)
    console.log(result)
  })
}

module.exports = {
  parse
}
