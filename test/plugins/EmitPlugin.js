class EmitPlugin {


  apply(compiler){
    // 注册 EmitPlugin 钩子 表示当前插件监听了 compiler 的 hooks 中的 emit 事件
    compiler.hooks.afterEmit.tap('EmitPlugin',function(){
      console.log(compiler.modules)
    })
  }
}

module.exports = EmitPlugin;