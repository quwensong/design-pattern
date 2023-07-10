function createIterator(array) {
    let index = 0;
    return {
        next() {
            return index < array.length ? { value: array[index++], done: false } : { value: undefined, done: true };
        }
    }
}

let array = [1, 2, 3];
let it: any = createIterator(array);
console.log(it.next());//{value:1,done:false}
console.log(it.next());;//{value:2,done:false}
console.log(it.next());;//{value:3,done:false}
console.log(it.next());;//{value:undefined,done:true}

