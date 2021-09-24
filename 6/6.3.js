// Creates a rectangle item with 4 arguments.
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
            return true;
        } else return false;
    }
}
// Generates a random number from 0 to max;
const rand = (max) => {
    return Math.round((Math.random() * (max-1)));
}

let rectangleArray = [];

/* *
    Assigning random values from 0 to 10 to the rectangles
*/
for (i=0;i<10;i++) {
    rectangleArray.push(new Rectangle(rand(10), rand(10), rand(10), rand(10)));
}
/* *
    Run through the rectangles and check their collision state
*/
for (x=0;x<rectangleArray.length;x++) {
    rectangleArray[x].count = 0;
    rectangleArray[x].id = x;
    for (i=0;i<rectangleArray.length;i++) {
        if(rectangleArray[x].collides(rectangleArray[i])) {
            rectangleArray[x].check = true;
            rectangleArray[x].count++;
        }
    }
    if (rectangleArray[x].check == true) console.log(`Rectangle${rectangleArray[x].id} is colliding with ${rectangleArray[x].count} other rectangles`);
}
