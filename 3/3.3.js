let ar1 = [1, 2, 3, 4, 5];
let newArrayPush = [];

for (item of ar1) {
    newArrayPush.push(item);
}

const newArrayMethod = {
    original: ar1,
    newArray: [],
    copy: function() {
        for (item of this.original) {
            this.newArray.push(item);
        }
        return this.newArray;
    }
};

const makeNewArray = (array) => {
    let newArray = [];
    for (item of array) {
        newArray.push(item);
    }
    return newArray;
}

console.log(`Original array = ${ar1}`);
console.log(`New array with just push = ${newArrayPush}`);
console.log(`New array with method = ${newArrayMethod.copy()}`);
console.log(`New array with function = ${makeNewArray(ar1)}`);