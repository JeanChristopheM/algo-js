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

let rect1 = new Rectangle(0,2,2,2);
let rect2 = new Rectangle(1,2,2,2);
let rect3 = new Rectangle(3,2,2,2);
let rect4 = new Rectangle(-1,2,2,2);

console.log(`Rect1 and Rect2 collision is : ${rect1.collides(rect2)}`);
console.log(`Rect3 and Rect4 collision is : ${rect3.collides(rect4)}`);
console.log(`Rect1 and Rect4 collision is : ${rect1.collides(rect4)}`);
