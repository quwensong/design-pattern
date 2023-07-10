let wanglaoshi = {
    name: 'wanglaoshi',
    age: 31,
    height: 160,
    boyfriend: null
}
let wangMama = new Proxy(wanglaoshi, {
    get(target, key) {
        if (key === 'age') {
            return wanglaoshi.age - 5;
        } else if (key === 'height') {
            return wanglaoshi.height + 5;
        }
        return target[key];
    },
    set(target, key, value) {
        if (key == 'boyfriend') {
            if (value.age > 40) {
                throw new Error('太老了,不行');
            } else if (value.salary < 20000) {
                throw new Error('挣的太少，养不起我');
            } else {
                target[key] = value;
                return true;
            }
        }
        return true;
    }
});

console.log(wangMama.age);
console.log(wangMama.height);
wangMama.boyfriend = {
    age: 18,
    salary: 200000
} as any;
