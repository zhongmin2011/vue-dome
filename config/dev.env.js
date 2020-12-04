'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // 在此处添加一个 打包命令
  NODE_ENV: process.argv[4].indexOf('--env=mock') !== -1 ? '"mock"':'"development"'
})
