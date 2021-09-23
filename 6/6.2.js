class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {

    }
}

let rect1 = new Rectangle(0,2,2,2);
let rect2 = new Rectangle(1,2,2,2);