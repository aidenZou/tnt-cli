#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const analyzer = require('./libs/analyzer')

const name = argv._[0] || 'base.md'
const basePath = path.join(__dirname, './test', name)
const text = fs.readFileSync(basePath, 'utf8')

analyzer.analyse(text)
