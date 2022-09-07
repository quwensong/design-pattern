# my-webpack
这是一个简化版的webpack，旨在于理解webpack的设计原理以及webpack当中
loader和plugin的区别，运行方式。<br>


> 运行步骤如下(方案一)：
1. 切换到my-webpack目录，运行`npm install`
2. 切换到test目录，运行`npm install`
3. 在test目录运行`npm link ../qwe-webpack --force`
4. 安装一个vscode插件 NPM-Scripts
>!(https://raw.githubusercontent.com/quwensong/MarkdownPhotos/main/webpack/npm-script-plugin.png)
6. 切回test点击运行`qwe`命令即可开始打包，目前只支持js文件打包(或者直接运行`npm run qwe`)

> 运行步骤如下(方案二 推荐)：
1. 切换到test目录(或者你自己写的.js文件为依赖的项目也行)，运行`npm install`
2. 直接运行`npm run qwe`






