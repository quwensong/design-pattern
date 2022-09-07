#! /usr/bin/env node
// 表示用当前用户的node环境来执行这个脚本

// 1.拿到使用当前包的项目(test) 的配置文件路径 webpack.config.js
const path = require('path');
const configPath = path.resolve('webpack.config.js'); //D:\前端学习learn\Vue学习之路\webpack\test\webpack.config.js

// 2.自动引用webpack.config.js配置文件导出的那个配置对象
const config = require(configPath);

// 3.通过配置文件进行打包
const Compiler = require('../src/compiler');

// 4.实例化打包器
const compiler = new Compiler(config)
if(Array.isArray(config.plugins)){
  config.plugins.forEach(plugin => {
    // 如果有插件对象，就执行对象上面的apply方法并且把compiler传过去
    plugin.apply(compiler)
  })
}
config.plugins.forEac
compiler.hooks.entryOption.call();
// 5.开始打包
compiler.run()
