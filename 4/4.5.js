const readlineSync = require("readline-sync");
/*
    This function calculates the distance between two points.
    Each point needs to have 2 coordinates and be an array.
    Call the function with the two arrays as arguments and get
    a measurement as the return.
*/
const calcDistance = (a, b) => { 
	var xDiff = a[0] - b[0]; 
	var yDiff = a[1] - b[1];

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

let pointOneCoordinates = [parseInt(readlineSync.question('Please enter the first point X value: ')), parseInt(readlineSync.question('Please enter the first point Y value: '))];
let pointTwoCoordinates = [parseInt(readlineSync.question('Please enter the second point X value: ')), parseInt(readlineSync.question('Please enter the second point Y value: '))];

console.log(`The distance between your two points is : ${calcDistance(pointOneCoordinates, pointTwoCoordinates).toFixed(2)}`);