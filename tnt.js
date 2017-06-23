#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const mdParser = require('./libs/md-parser')
const metaParser = require('./libs/meta-parser')
const storyParser = require('./libs/story-parser')

const name = argv._[0] || 'base.md'
const basePath = path.join(__dirname, './test', name)
const text = fs.readFileSync(basePath, 'utf8')

const segments = text.split(/---+/)
if (segments.length !== 2) {
  console.log('error format')
} else {
  metaParser.parse(segments[0])
  const json = mdParser.parse(segments[1])
  storyParser.parse(json)
}
