class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    condinate() {
        return '${this.x}, ${this.y}';
    }
}

module.exports = Point;
