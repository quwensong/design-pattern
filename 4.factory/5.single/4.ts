/**
 * 单例与构建过程的分离
 */
export { }
interface Window {
    new(): Window
}
function Window() {

}
Window.prototype.hello = function () {
    console.log('hello');
}
let createInstance = (function () {
    let instance: Window;
    return function () {
        if (!instance) {
            instance = new (Window as any);
        }
        return instance;
    }
})()
let w1 = createInstance();
let w2 = createInstance();
console.log(w1 === w2);

