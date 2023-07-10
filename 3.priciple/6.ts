import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

}
//传父类的地方也可以传子类
let element = React.createElement(React.Component);


//当你定义一个类的时候，会得到二个类型 1 类的类型 2.类的原型 的类型或者 说实例的类型
class MyApp {
    static age: number;
    getName() {

    }
}
/* let my = new MyApp();
let m: MyApp = my;
let n: typeof MyApp = { new(): MyApp, age: number, }; */
class Animal {

}
class Dog {

}
function getName(animal: Animal) {

}
getName(new Dog());