const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please?');
let userFirstName = readlineSync.question('Can you give me your firstname please?');
let userCity = readlineSync.question('Can you give me the name of the city you live in?');
console.log(`Your name is ${userName} ${userFirstName} and you live in ${userCity}.`);