const readlineSync = require("readline-sync");
let chiffre = readlineSync.question(`Please give me a number (above 3) : `);
while (chiffre < 4) {
    chiffre = readlineSync.question(`Please give me a number (above 3) : `);
}
let divisors = [];
for (i=2;i<chiffre;i++) {
    if (Number.isInteger(chiffre / i)) divisors.push(chiffre/i);
}
console.log(`The divisors of ${chiffre} are ${divisors.reverse()}`);