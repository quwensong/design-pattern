
/**
 * 依赖倒置原则
 * 依赖抽象，而非依赖依赖具体的实现
 */
interface Girlfriend {
    age: number;
    height: number;
    cook(): void
}
class LinChiling implements Girlfriend {
    age: number = 35;
    height: number = 178;
    cook() {
        console.log('泡面');
    }
}
class HanMeimei implements Girlfriend {
    age: number = 35;
    height: number = 178;
    cook() {
        console.log('泡面');
    }
}
class SingleDog {
    constructor(public girlfriend: Girlfriend) { }
}

let dog1 = new SingleDog(new LinChiling());
let dog2 = new SingleDog(new HanMeimei());