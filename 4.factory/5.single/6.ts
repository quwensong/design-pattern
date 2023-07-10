(function (modules: any) {
    // webpack的启动函数
    //模块的缓存
    var installedModules: Record<string, any> = {};
    //定义在浏览器中使用的require方法
    function __webpack_require__(moduleId: any) {
        //检查模块是否在缓存中
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        //创建一个新的模块并且放到模块的缓存中
        var module = (installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        });

        //执行模块函数
        modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        );

        //把模块设置为已经加载
        module.l = true;

        //返回模块的导出对象
        return module.exports;
    }
}
)(
    {
        './src/index.js': function (module: any, exports: any) {

        }
    }
)