#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const mdParser = require('./libs/md-parser')
const storyParser = require('./libs/story-parser')

const name = argv._[0] || 'base.md'
const basePath = path.join(__dirname, './test', name)
const text = fs.readFileSync(basePath, 'utf8')

const json = mdParser.parse(text)
storyParser.parse(json)
