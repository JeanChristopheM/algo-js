/*
    I made this function myself because my mind does NOT WORK IN RECURSIVE.
*/
const factorial = (a) => {
    let result = a;
    for (i=1;i<a;i++) {
        result *= a-i;
    }
    return result;
}
console.log(factorial(5));


/*
    But here's the recusive version.. apparently. Thank you El coderrrr.
*/
const factorialRecursive = (a) => {
    if (a < 0) return;
    if (a < 2) return 1;
    return a * factorialRecursive(a-1);
}
console.log(factorialRecursive(5));