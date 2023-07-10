export { }
//继承主要是实现代码逻辑的复用，或者说是属性和方法的复用
//继承也会导致类的层次过深，类和类之间出现了耦合，如果修改父类，子类也会跟着变
class Animal {
    name: string;
    age: number;
    eat() {
        console.log('吃东西');
    }
}
let animal = new Animal();
animal.eat();

class Dog extends Animal {

}
let dog = new Dog();
dog.name;
dog.eat();