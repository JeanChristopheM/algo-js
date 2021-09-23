const readlineSync = require("readline-sync");
/* This function takes an array as argument and returns the average value of the array */
const average = (arr) => {
    let result = 0;
    for (item of arr) {
        result += item;
    }
    return result / arr.length;
}
/* This function takes an array as argument and returns the minimum value of the array */
const min = (arr) => {
    let result = arr[0];
    for (item of arr) {
        if (result > item) result = item;
    }
    return result;
}
/* This function takes an array as argument and returns the maximum value of the array */
const max = (arr) => {
    let result = arr[0];
    for (item of arr) {
        if (result < item) result = item;
    }
    return result;
}

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
let myArr = multiRand(amount);


console.log(`Your array is : [${myArr}]`);
console.log(`The average is : ${average(myArr)}`);
console.log(`The minimum is : ${min(myArr)}`);
console.log(`The maximum is : ${max(myArr)}`);