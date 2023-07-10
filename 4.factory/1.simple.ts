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
class FlowerCoffee extends Coffee {
}
//简单工厂
class CafeFactory {
    static order(name: string) {
        switch (name) {
            case 'Americano':
                return new AmericanoCoffee('美式咖啡');
            case 'LatteCoffee':
                return new AmericanoCoffee('拿铁咖啡');
            case 'CappuccinoCoffee':
                return new AmericanoCoffee('卡布奇诺咖啡');
            case 'FlowerCoffee':
                return new AmericanoCoffee('花式咖啡');
            default:
                throw new Error('你点的咖啡品种我们不支持');
        }
    }
}
console.log(CafeFactory.order('Americano'));
console.log(CafeFactory.order('LatteCoffee'));
console.log(CafeFactory.order('CappuccinoCoffee'));
