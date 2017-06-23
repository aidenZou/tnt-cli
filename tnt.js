#!/usr/bin/env node
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const watcher = require('./libs/watcher')
const { sync } = require('./libs/utils')

switch (argv._[0]) {
  case 'load':
    const filePath = path.join(process.cwd(), argv._[1] || '')
    sync(filePath)
    break
  case 'watch':
    watcher.watch()
    break
  default:
    console.log('tnt load | watch 😎')
    break
}
