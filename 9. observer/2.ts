/**
 * Promise
 */
export { }
class Promise {
    successes: Array<Function> = []
    constructor(task) {
        const resolve = () => {
            this.successes.forEach(success => success());
        }
        task(resolve);
    }
    then(success) {
        this.successes.push(success);
    }
}
let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});
promise.then(() => console.log(1));
promise.then(() => console.log(2));