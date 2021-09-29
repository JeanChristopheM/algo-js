class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get name() {
        return `${this.firstname} ${this.lastname}`;
    }
    set name(fullname) {
        let nameArray = fullname.split(" ");
        this.firstname = nameArray[0];
        this.lastname = nameArray[1];
    }
}

let newPerson = new Person("Molhant", "Jean-Christophe");
console.log(newPerson.name);
newPerson.name = "Raoni Gillet";
console.log(newPerson.name);
