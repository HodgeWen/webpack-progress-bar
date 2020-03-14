const ProgressBar = require('progress')
const { ProgressPlugin } = require('webpack')
require('colors')

const getBg = (bg) => (bg ? 'bg' + bg.slice(0, 1).toUpperCase() + bg.slice(1) : '')

const getContent = (content) => (content !== undefined ? content : ' ')

module.exports = class WebpackProgessBar extends ProgressPlugin {
  constructor(options = {}) {
    // 加入到钩子队列中
    super((...percent) => {
      this.bar.update(percent)
    })
    this.options = options
    this._init()
  }

  _init() {
    const {
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
    } = this.options

    const incompleteBg = getBg(incomplete.bg)
    const completeBg = getBg(complete.bg)

    const incompleteContent = getContent(incomplete.content)
    const completeContent = getContent(complete.content)
    const format = `:bar  ${':percent'.green} ${':elapseds'.blue}`
    this.bar = new ProgressBar(format, {
      total,
      width,
      clear,
      incomplete: incompleteBg ? incompleteContent[incompleteBg] : incompleteContent,
      complete: completeBg ? completeContent[completeBg] : completeContent
    })
  }
}
