/**
 * 封装变化
 */
export { }
interface Window {
    hello: any
}
function Window() {

}
Window.prototype.hello = function () {
    console.log('hello');
}
//希望 封装变化，希望这个createInstance可以创建任何类型的实例 
let createInstance = function (Constructor: any) {
    let instance: any;
    return function AnyConstructor(this: any) {
        if (!instance) {
            //正常来说 this.__proto__=AnyConstructor.prototype
            Constructor.apply(this, arguments);
            //this.__proto__= Constructor.prototype
            Object.setPrototypeOf(this, Constructor.prototype);
            instance = this;
        }
        return instance;
    }
}
let createWindow = createInstance(Window);
let w1 = new (createWindow as any)();
let w2 = new (createWindow as any)();
console.log(w1 === w2);

