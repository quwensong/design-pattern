//let EventEmitter = require('events');
class EventEmitter {
    _events = {};
    constructor() {

    }
    on(type, listener) {
        let listeners = this._events[type];
        if (listeners) {
            listeners.push(listener);
        } else {
            this._events[type] = [listener];
        }
    }
    emit(type, ...args) {
        let listeners = this._events[type] || [];
        listeners.forEach(listener => listener(...args));
    }
}
let subject = new EventEmitter();
subject.on('click', (name, age) => {
    console.log(1, name, age);
});
subject.on('click', (name, age) => {
    console.log(2, name, age);
});
subject.emit('click', 'zhufeng', 10);