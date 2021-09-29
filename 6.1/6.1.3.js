class Animal {
    constructor(john) {
        this.name = john;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name, name);
        this.greeting = "Miaou";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, name);
        this.greeting = "Bark";
    }
}

let newDog = new Dog("Pixel");
let newCat = new Cat("Satanas");

console.log(newDog.sayHello());
console.log(newCat.sayHello());