const readlineSync = require("readline-sync");
let n = readlineSync.question('Please enter the amount of numbers you want : ');
let result = 0;
for (i=0; i<n; i++) {
    result += parseInt(readlineSync.question('Please enter a number : '));
}
console.log(result);