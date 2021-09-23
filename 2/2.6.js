const readlineSync = require("readline-sync");
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let number = 0;
while (number < 1 || number > 7) {
    number = readlineSync.question('Please enter a number between 1 and 7 : ');
    if (number < 1 || number > 7) console.log('The number has to be between 1 and 7. Try again.');
    else console.log(`The number ${number} corresponds to the weekday ${days[number-1]}`);
}