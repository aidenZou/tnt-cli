#!/usr/bin/env node
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const loader = require('./libs/file-loader')

switch (argv._[0]) {
  case 'load':
    const data = loader.load(path.join(process.cwd(), argv._[1]))
    console.log(JSON.stringify(data, null, 2))
    break
  case 'watch':
    console.log('watch todo')
    break
  default:
    console.log('error command!')
    break
}
