const readlineSync = require("readline-sync");
/*
This rand10 function will generate a number from 0 to 9.
I am then adding 1 to make it from 1 to 10.
Just call the function to get the result.
*/
const rand10 = () => {
    return Math.floor((Math.random() * 10) + 1);
}
/*
This multiRand function will make an array
of random numbers from 1 to 10.
The amount of numbers in the array depends on the "n" argument
Call it with a number value as the argument to get the results.
*/
const multiRand = (n) => {
    let result = [];
    for (i=0;i<n;i++) {
        result.push(rand10());
    }
    return result;
}

let amount = readlineSync.question('Please enter the amount of numbers you want in your array : ');
console.log(multiRand(amount));