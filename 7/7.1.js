const rand = (max) => {
    return Math.round((Math.random() * (max-1))+1);
}
let guess = rand(100);
const readlineSync = require("readline-sync");
let userGuess = -1;
while (userGuess != guess) {
    userGuess = readlineSync.question('Try to guess a number from 1 to 100 :');
    if (userGuess < guess) {
        console.log(`Too low !`);
    } else if (userGuess > guess) {
        console.log(`Too high !`);
    }
    if (userGuess == guess) {
        console.log(`BRAVO ! You got it :) `);
        let keepGoing = readlineSync.question(`Would you like to keep playing ? (y/n) : `);
        if (keepGoing === "y" || keepGoing === "Y") {
            guess = rand(100);
            userGuess = -1;
        }
    }
}