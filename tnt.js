#!/usr/bin/env node
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const loader = require('./libs/file-loader')
const request = require('./libs/request')

switch (argv._[0]) {
  case 'load':
    const data = loader.load(
      path.join(process.cwd(), argv._[1] || '')
    )
    request.send('foo', data)
      .then(info => console.log('update success'))
      .catch(e => console.log('update error'))
    break
  case 'watch':
    console.log('watch todo')
    break
  default:
    console.log('error command!')
    break
}
