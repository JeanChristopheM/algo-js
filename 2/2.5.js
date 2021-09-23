const readlineSync = require("readline-sync");
let number = 0;
while (number != 42) {
    number = readlineSync.question('Please enter your favorite number : ');
    if (number != 42) console.log(`Are you sure ?`);
    else console.log(`That's good.`);
}
