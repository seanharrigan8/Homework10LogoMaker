

class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        console.log(this.color);
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50,15 100,100, 0,100" 
        style="fill:${this.color};
        stroke:blue;stroke-width:1" />`;
        //return svg string forle
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="${this.color}" stroke-width="4" fill="yellow" />`;
        //return svg string for circle
    }
}

class Square extends Shape {
    render() {
       return `<rect width="100" 
       height="150"
       style="fill:${this.color} stroke:yellow"
    stroke-width:"2" 
    fill-opacity:0.1 />`;
         
    }
}

module.exports = { Triangle, Circle, Square };