export { }
abstract class Coffee {
    constructor(public name: string) {
    }
}
class AmericanoCoffee extends Coffee {
}
class LatteCoffee extends Coffee {
}
class CappuccinoCoffee extends Coffee {
}

abstract class CateFactory {
    abstract createCoffee(): Coffee;
}
class AmericanoCoffeeFactory extends CateFactory {
    createCoffee() {
        return new AmericanoCoffee('美式咖啡');
    }
}
class LatteCoffeeFactory extends CateFactory {
    createCoffee() {
        return new LatteCoffee('拿铁咖啡');
    }
}
class CappuccinoCoffeeFactory extends CateFactory {
    createCoffee() {
        return new CappuccinoCoffee('卡布其诺咖啡');
    }
}
//原来在简单工厂里，是由Factory来创建产品的
//在工厂方法里，不再由Factory来创建产品，而是先创建具体的工厂，然后具体的工厂来创建产品
class Factory {
    static order(name: string) {
        switch (name) {
            case 'Americano':
                return new AmericanoCoffeeFactory().createCoffee();
            case 'LatteCoffee':
                return new LatteCoffeeFactory().createCoffee();
            case 'CappuccinoCoffee':
                return new CappuccinoCoffeeFactory().createCoffee();
            default:
                throw new Error('你点的咖啡品种我们不支持');
        }
    }
}

/* let americanoCoffeeFactory = new AmericanoCoffeeFactory();
console.log(americanoCoffeeFactory.createCoffee());
let latteCoffeeFactory = new LatteCoffeeFactory();
console.log(latteCoffeeFactory.createCoffee());
let cappuccinoCoffeeFactory = new CappuccinoCoffeeFactory();
console.log(cappuccinoCoffeeFactory.createCoffee()); */



function createElement(type: any, config: any) {
    //this绑定为null 第一个参数绑定type
    return { type, props: config }
}
function createFactory(type: string) {
    const factory = createElement.bind(null, type);
    return factory;
}
let factory = createFactory('h1');
let element = factory({ id: 'h1', className: 'title' });
console.log(element);


