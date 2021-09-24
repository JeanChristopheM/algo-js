const readlineSync = require("readline-sync");
let firstNumber = parseInt(readlineSync.question('Can you give me an integer please?'));
let secondNumber = parseInt(readlineSync.question('And another one please?'));
console.log(`${firstNumber % secondNumber}`);