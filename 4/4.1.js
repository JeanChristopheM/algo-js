const readlineSync = require("readline-sync");

let recLength = readlineSync.question('Please enter a length in cm for your rectangle : ');
let recWidth = readlineSync.question('Please enter a width in cm for your rectangle : ');

/*
This Function takes two arguments.
A length and a width.
It will return the product of the multiplication.
Use it to calculate surfaces.
*/
const calcSurface = (length, width) => {
    return length * width;
}

console.log(`The surface of your rectangle is ${calcSurface(recLength, recWidth)}cm²`);
