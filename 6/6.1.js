class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.pow((3.14 * this.radius), 2);
    }
}