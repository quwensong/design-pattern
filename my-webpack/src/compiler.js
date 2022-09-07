const path = require('path');
const fs = require('fs');

const babylon = require('babylon'); //源代码转化为 ast语法树
const traverse = require('@babel/traverse').default; //遍历树
const generator = require('@babel/generator').default; 

// 创建各种钩子
// 插件将自己的方法注册到对应钩子上，交给webpack
// webpack编译时,会适时地触发相应钩子，因此也就触发了tapable的方法
const { SyncHook } = require('tapable');
// SyncHook实现原理：
// class SyncHook {
//   constructor() {
//     this.hooks = [];
//   }
//   tap(name, fn) {
//     this.hooks.push(fn);
//   }
//   call() {
//     this.hooks.forEach((hook) => hook(...arguments));
//   }
//   }
  

const template = fs.readFileSync(path.resolve(__dirname, 'template.ejs'), 'utf8');

// 通过配置文件进行打包
class Compiler {
  constructor(config) {
    this.config = config;
    this.entryName = ''; //入口文件相对路径
    this.modules = {} //需要的所有模块
    this.entry = this.config.entry; 
    this.template = template;
    this.hooks = {
      // SyncHook
      entryOption:new SyncHook(),
      run:new SyncHook(),
      emit:new SyncHook(), //发射文件
      afterEmit:new SyncHook()
    };
    this.root = process.cwd(); //获取当前命令运行时候的路径  => D:\前端学习learn\Vue学习之路\webpack\test
  }
  readSource(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // 判断这个路径能不能匹配到 loader
    const rules = this.config.module.rules
    for(let i = 0; i < rules.length; i++) {
      // 获取当前loader的正则表达式和处理函数
      const { test,use } = rules[i];
      if(test.test(filePath)){
        let len = use.length - 1;
        function normalLoader(){ //loader内部可能有异步情况，这里先不考虑
           // 定位最后一个loader
          const loader = use[len]; 
          const fn = require(loader)
          content = fn(content);
          if(len-- > 0){
            normalLoader() //如果有loader就继续处理
          }
        }
        normalLoader()
      }
    }
    return content;
  }
  parser(source,parentPath){
    // ast语法解析  1.require => __webpack_require__ 2.加一个父路径 ./a.js => ./src/base/a.ja
    const dependencies = []; //存放所有的代码依赖
    // 1.转ast语法树
    const ast = babylon.parse(source)
    // 2.遍历树，修改树
    traverse(ast,{
      CallExpression(p){
        const node = p.node;
        if(node.callee.name == 'require'){
          node.callee.name = '__webpack_require__';
          // require('a') => require('a.js') 加.js后缀
          const oldPath = node.arguments[0].value + (path.extname(node.arguments[0].value) ? '' : '.js');
          // 当前require了某个模块
          const modulePath = './' + path.join(parentPath,oldPath).replace(/\\/g,'/')
          dependencies.push(modulePath);
          node.arguments[0].value = modulePath;
        }
      }
    })
    // 3.生成新的代码
    const r = generator(ast)
    // 4.返回新的代码
    return {code:r.code,dependencies};    
  }

  buildModule(modulePath,isEntry){
    // 收集依赖关系
    const source = this.readSource(modulePath);
    // 相对模块路径
    const relativeModulePath = './' + path.relative(this.root,modulePath).replace(/\\/g,'/');
    if(isEntry){
      this.entryName = relativeModulePath;
    }
    const {code,dependencies} = this.parser(source,path.dirname(relativeModulePath)); //转化源码
    // {'路径':'源码'}
    this.modules[relativeModulePath] = code
    dependencies.forEach((dep)=>{ //递归收集每个模块的依赖
      this.buildModule(path.join(this.root,dep),false)
    });
  
  }
  emit(){
    // 渲染模板
    const ejs = require('ejs');
    const renderString = ejs.render(this.template,{
      entryName: this.entryName,
      modules: this.modules
    })
    this.assets = {};
    // 输出文件名
    const filename = this.config.output.filename
    this.assets[filename] = renderString;
    const p = this.config.output.path || path.resolve('dist')
    console.log("🚀 ~ file: compiler.js ~ line 79 ~ Compiler ~ emit ~ path.resolve('dist')", path.resolve('dist'))
    // 创建dist文件夹
    fs.mkdir(p,function(err){
      if(err) console.error(err);
    });
    Object.keys(this.assets).forEach(filename=>{
      // 打包输出路径
      const outputPath = path.join(p,filename);
      fs.writeFileSync(outputPath, this.assets[filename]);
    })
  }
  run(){
    this.hooks.run.call();
    // 入口文件的路径 path.join(this.root,this.entry) => D:\前端学习learn\Vue学习之路\webpack\test\src\index.js
    console.log("开始打包",);
    // 1.找到入口和所有依赖
    this.buildModule(path.join(this.root,this.entry),true);
    // 2.使用模板和数据渲染成为一个打包后的文件
    this.hooks.afterEmit.call();
    this.emit();
    this.hooks.emit.call();
  }
}

module.exports = Compiler;