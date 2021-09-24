let fibList = [0, 1];
const readlineSync = require("readline-sync");

let amount = readlineSync.question(`Please enter the amount of fibonacci numbers you want : `);
for (i=0;i<(amount-2);i++) {
    fibList.push(fibList.at(-1) + fibList.at(-2));
}
const print = (n) => {
    if (n == 1) return 0;
    if (n == 2) return `0,1`;
    else return fibList;
}
console.log(`Here's your list : ${print(amount)}`);