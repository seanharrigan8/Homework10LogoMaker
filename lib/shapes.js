

class Shape {
    //base class for all shapes//
    constructor(color = 'black') {
        this.color = color;
    }
    setColor(color) {
    
                this.color = color;
            }        
    render() {
        throw new Error('Render method to be overwritten by specific shape classes')
    }
}

class Triangle extends Shape {
    //inherits from Shape then overrides based on user input//
    constructor(color, strokeColor) {
        super(color);
        this.strokeColor = strokeColor;
    }
    render() {
        return `<svg width="100" height="100">
        <polygon points="50,15 100,100, 0,100" 
        style="fill:${this.color};
        stroke=${this.strokeColor};stroke-width:1" />
        </svg>
        `;
        //return svg string forle
    }
}

class Circle extends Shape {
    ///inherits from Shape then overrides based on user input//
    constructor(color, strokeColor) {
        super(color);
        this.strokeColor = strokeColor;
    }
    render() {
        return `<svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="${this.strokeColor}" stroke-width="4" fill="${this.color}" />
        </svg>
        `;
        //return svg string for circle
    }
}

class Square extends Shape {
    //inherits from Shape then overrides based on user input//
    constructor(color, strokeColor) {
        super(color);
        this.strokeColor = strokeColor;
    }
    render() {
       return `<svg width="100" height="100">
       <rect width="80" 
       height="80"
       style="fill:${this.color};stroke=${this.strokeColor};stroke-width:2;fill-opacity:0.1" />
       </svg>
       `;
         
    }
}

const color = 'red';
const strokeColor = 'blue';

const triangle = new Triangle(color, strokeColor);
console.log(triangle.render());

const circle = new Circle(color, strokeColor);
console.log(circle.render());

const square = new Square(color, strokeColor);
console.log(square.render());

module.exports = { Shape, Triangle, Circle, Square };
