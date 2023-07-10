export { }
//如何通过es5实现单例
function Window() {

}
Window.prototype.hello = function () {
    console.log('hello');
}
Window.getInstance = (function () {
    let window: Window;
    return function () {
        if (!window) {
            window = new (Window as any)();
        }
        return window;
    }
})()
//这种使用方式有缺点，就是说必须要告诉 使用者通过getInstance方法得到单例
let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2);
