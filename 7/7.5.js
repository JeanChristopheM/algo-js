let numbers = [12, 10, 15, 11, 14, 13, 16];

const sortIt = (arr) => {
    let finished = false;
    while (!finished) {
        finished = true;
        for (i=0; i<arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                finished = false;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortIt(numbers));