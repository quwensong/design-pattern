export { }
abstract class Animal {
    abstract speak(): void;
}
class Dog extends Animal {
    speak(): void {
        console.log('汪汪汪');
    }

} 
class Cat extends Animal {
    speak() {
        console.log('喵喵喵');
    }
}
function talk(animal: Animal) {
    animal.speak();
}
talk(new Dog());
talk(new Cat());