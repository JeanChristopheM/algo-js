/*
This rand10 function will generate a number from 0 to 9.
I am then adding 1 to make it from 1 to 10.
Just call the function to get the result.
*/

const rand10 = () => {
    return Math.floor((Math.random() * 10) + 1);
}
console.log(rand10());