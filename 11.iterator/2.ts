//array forEach
interface Array<T> {
    forEach2: any
}
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback.call(this, this[i], i, this);
    }
};
let arr = [1, 2, 3];
arr.forEach2((item, index, arr) => {
    console.log(item, index, arr);
});