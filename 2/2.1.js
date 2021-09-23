const readlineSync = require("readline-sync");
let age = readlineSync.question('Please enter your age : ');
if (age >= 18) console.log('You are an adult.');
else console.log('You are not an adult');