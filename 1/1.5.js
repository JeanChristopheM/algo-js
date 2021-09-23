const readlineSync = require("readline-sync");
let firstNumber = parseInt(readlineSync.question('Can you give me a number with decimals please?'));
let secondNumber = parseFloat(readlineSync.question('And another one please?').replace(",", "."));
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);