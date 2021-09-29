class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return `Hello, ${this.firstname} ${this.lastname}!`;
    }
}

let newGuy = new Person("Molhant", "Jean-Christophe");
console.log(newGuy.sayHello());