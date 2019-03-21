const ProgressBar = require('progress');
const webpack = require('webpack')
require('colors')

module.exports = function WebpackProgess ({
  incomplete = {
    bg: 'white',
    content: ' '
  },
  complete = {
    bg: 'green',
    content: ' '
  },
  width = 25,
  clear = true,
  total = 100
} = {}) {
  const incompleteBg = incomplete.bg ? 
  'bg' + incomplete.bg.slice(0, 1).toUpperCase() + 
  incomplete.bg.slice(1) : ''

  const completeBg = complete.bg ? 
  'bg' + complete.bg.slice(0, 1).toUpperCase() + 
  complete.bg.slice(1) : ''

  const stream = process.stdout
  const format = `:bar  ${':percent'.green} ${':elapseds'.blue}`
  const bar = new ProgressBar(format, { 
    total, width, clear,
    incomplete: incompleteBg ? incomplete.content[incompleteBg] : incomplete.content,
    complete: completeBg ? complete.content[completeBg] : complete.content
  })
  let hasCompiled = false
  return new webpack.ProgressPlugin((percent) => {
    !hasCompiled && stream.write('\n') && (hasCompiled = true)
    bar.update(percent)
  })
}