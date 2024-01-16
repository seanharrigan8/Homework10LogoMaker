

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
    constructor(color, strokeColor) {
        super(color);
        this.strokeColor = strokeColor;
    }
    render() {
        return `<polygon points="50,15 100,100, 0,100" 
        style="fill:${this.color};
        stroke=${this.strokeColor};stroke-width:1" />`;
        //return svg string forle
    }
}

class Circle extends Shape {
    constructor(color, strokeColor) {
        super(color);
        this.strokeColor = strokeColor;
    }
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="${this.strokeColor}" stroke-width="4" fill="${this.color}" />`;
        //return svg string for circle
    }
}

class Square extends Shape {
    constructor(color, strokeColor) {
        super(color);
        this.strokeColor = strokeColor;
    }
    render() {
       return `<rect width="100" 
       height="150"
       style="fill:${this.color};stroke=${this.strokeColor};stroke-width:2;fill-opacity:0.1" />`;
         
    }
}

const color = 'red';
const shape = new Shape(color);
shape.setColor(color);

// const shape = new Shape('red');
// shape.setColor(color);

// class Shape {
//     constructor(color) {
//         this.color = null;
//     }

//     setColor(color) {
//         this.color = color;
//     }
// }

module.exports = { Shape, Triangle, Circle, Square };
