# webpack-progress-bar
![webpack-progress-bar](./progress.gif)

# 安装 install
```
npm i webpack-progress-bar-plugin -D 
yarn add webpack-progress-bar-plugin -D
```

# 使用 use
``` js
const WebpackProgressBar = require('webpack-progress-bar')

plugins: [
  new WebpackProgressBar()
]

```

# 选项 options
``` js
// default options
new WebpackProgressBar({
  incomplete: {      
    bg: 'white',
    content: ' '
  },
  complete: {
    bg: 'green',
    content: ' '
  },
  width: 25,
  clear: true,
  total: 100
})

```

