const readlineSync = require("readline-sync");
let minAge = parseInt(readlineSync.question('Please enter an age minimum value : '));
let maxAge = parseInt(readlineSync.question('Please enter an age maximum value : '));
if (minAge >= maxAge) console.log(`I'm sorry chief but that won't work... Please enter a minimum and maximum values that make sense.`);
else {
    let currentAge = parseInt(readlineSync.question('Please enter a current age value : '));
    if (currentAge > minAge && currentAge < maxAge) console.log('Your age fits in between the max and min values. Congratulations.');
    else console.log(`Your age doesn't fit in between the max and min values. Come back in the past or the future to fit in.`);
}