let ar1 = [1, 2, 3, 4, 5, 20, -8];
const minmax = (array) => {
    let min = array[0];
    let max = array[0];
    for (item of array) {
        if (item<min) min = item;
        else if (item>max) max = item;
    }
    return `The minimum of the array is ${min} and the maximum is ${max}`;
}
console.log(minmax(ar1));