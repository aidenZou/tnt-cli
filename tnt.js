#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const mdParser = require('./libs/parsers/md')
const metaParser = require('./libs/parsers/meta')
const storyParser = require('./libs/parsers/story')

const name = argv._[0] || 'base.md'
const basePath = path.join(__dirname, './test', name)
const text = fs.readFileSync(basePath, 'utf8')

const segments = text.split(/---+/)
if (segments.length !== 2) {
  console.log('error format')
} else {
  metaParser.parse(segments[0])
  const json = mdParser.parse(segments[1])
  const data = storyParser.parse(json)
  console.log(JSON.stringify(data, null, 2))
}
