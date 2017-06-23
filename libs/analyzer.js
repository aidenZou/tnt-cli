const marked = require('marked')
const cheerio = require('cheerio')
marked.setOptions({ smartLists: true })

function getStoryName (node) {
  return node.children[0].data
}

function getSubTask (task) {
  if (task.children.length === 1) return []
  else {
    const subTask = task.children[1].children.filter(
      node => node.name === 'li'
    ).map(li => li.children[0].data)
    return subTask
  }
}

function getTasks (storyHeader) {
  try {
    const tasks = storyHeader.next.next.children
      .filter(node => node.name === 'li')
      .map(li => {
        return {
          text: li.children[0].data,
          children: getSubTask(li)
        }
      })
    console.log(123)
    return tasks
  } catch (e) {
    throw e
  }
}

function analyse (text) {
  const html = (marked(text))
  const $ = cheerio.load(html)
  const data = $('h2, h3').get().map(
    (node) => ({
      story: getStoryName(node),
      tasks: getTasks(node)
    })
  )
  return data
}

module.exports = {
  analyse
}
