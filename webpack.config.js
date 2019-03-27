const path = require('path')

module.exports = {
    entry:'./src/GettingStarted/index.js',
    output: {
      filename:'main.js',
      path:path.resolve(__dirname,'src/GettingStarted/dist')
    }
}