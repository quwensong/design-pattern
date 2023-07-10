namespace a {
    interface Animal {
        swings: number;
        fly: Function
    }
    //如果说装饰器函数是用来修饰类的话，那么target就是类的构造函数本身
    function flyable(swings) {
        return function flyable(target) {
            console.log(target);
            target.prototype.swings = swings;
            target.prototype.fly = function () {
                console.log('我能飞');
            }
        }
    }


    @flyable(5)
    class Animal {
        constructor() { }
    }
    let animal: Animal = new Animal();
    console.log(animal.swings);
    animal.fly();

}

namespace b {
    interface Person {
        protoName: string;
    }
    //实例属性的时候target是类的原型对象，key是属性的名字
    function instancePropertyDecorator(target, key) {
        target.protoName = '我是类的原型上的属性';
        console.log('instancePropertyDecorator', target, key);
    }
    //类的静态属性的时候target就是类的构造函数，key就是属性名
    function classPropertyDecorator(target, key) {
        console.log('classPropertyDecorator', target, key);
    }
    //如果是实例的方法的话target是类的原型  key方法名 descriptor属性描述符
    function instanceMethodDecorator(target, key, descriptor) {
        console.log('instanceMethodDecorator', target, key, descriptor);
    }
    //如果是类的方法的话target是类的构造函数  key方法名 descriptor属性描述符
    function classMethodDecorator(target, key, descriptor) {
        console.log('classMethodDecorator', target, key, descriptor);
    }
    class Person {
        @instancePropertyDecorator
        instanceProperty: string;//实例属性
        @classPropertyDecorator
        static classProperty: string;//类的静态属性
        @instanceMethodDecorator
        instanceMethod() {//实例的方法

        }
        @classMethodDecorator
        static classMethod() {//类的静态方法

        }
    }
    console.log(Person.prototype.protoName);
}

//let { deprecate } = require('core-decorators');
//console.log(readonly);

namespace d {
    //Cannot assign to read only property 'pi' of object '#<Circle>'
    /* function readonly(target, key) {
        Object.defineProperty(target, key, {
            writable: false
        });
    } */
    function deprecate(target, methodName, descriptor) {
        let oldVal = descriptor.value;//先缓存老的函数 
        descriptor.value = function (...args) {
            let message = (
                `DEPRECATION ${target.constructor.name}#${methodName}: This function will be removed in future versions.`
            )
            console.warn(message);
            return oldVal(...args);
        }
    }
    class Circle {
        //@readonly
        pi: number = 3.12
        @deprecate
        getName() {
            console.log('getName');
        }
    }
    let circle = new Circle();
    circle.pi;
    circle.pi = 3.16;
    console.log(circle.pi);
    //DEPRECATION Circle#getName: This function will be removed in future versions.
    circle.getName();

}