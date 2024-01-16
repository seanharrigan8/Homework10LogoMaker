

class Shape {
    constructor(green) {
        this.color = green;
    }

    render() {
        console.log(this.color);
    }
}

class Triangle extends Shape {
    render() {
        //return svg string for traingle
    }
}

class Circle extends Shape {
    render() {
        //return svg string for circle
    }
}

class Square extends Shape {
    render() {
        //return svg string for square
    }
}