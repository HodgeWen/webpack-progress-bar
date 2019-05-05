const WebpackProgressBar = require('./index.js')
const path = require('path')
module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, './test/index.js'),

  output: {
    path: path.resolve(__dirname, './dist')
  },

  resolve: {
    alias: {
      test: path.resolve(__dirname, './test')
    }
  },

  plugins: [
    new WebpackProgressBar()
  ]
}