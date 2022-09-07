const path = require('path')
const EmitPlugin = require('./plugins/EmitPlugin')

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'build.js'
  },
  module:{
    rules:[
      {
        test: /\.less$/,
        use:[
          path.resolve(__dirname, 'loaders','style-loader.js'),
          path.resolve(__dirname, 'loaders','less-loader.js')
        ]

      }
    ]
  },
  plugins:[
    new EmitPlugin()//多个插件监听了同一个事件，谁先注册监听谁先执行
  ]

}