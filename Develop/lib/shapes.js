//write my new images to the example folder but change the file name each time like example1, example2//

class Shape {
  //base class for all shapes//
  constructor( color = "blue", text = "SDH", strokeColor = "blue", textColor = "black") {
    this.color = color;
    this.text = text;
    this.strokeColor = strokeColor;
    this.textColor = textColor;
    // this.strokeColor = strokeColor;
  }
  setColor(color) {
    this.color = color;
  }
  renderText() {
    return `<text x="50" y="50" font-family="Verdana" font-size="20" fill="${this.textColor}">${this.text}</text>`;
  } 
  render() {
    throw new Error(
      "Render method to be overwritten by specific shape classes");
  }
}

class Triangle extends Shape {
  //inherits from Shape then overrides based on user input//
  constructor(color, text, strokeColor, textColor) {
    super(color, text, strokeColor, textColor);
  }
  render() {
    return `<svg width="300" height="200">\n<polygon points="50,15 100,100, 0,100" style="fill:${this.color};stroke:${this.strokeColor};stroke-width:1" />\n${this.renderText()}</svg>`;
    //return svg string forle
  }
}

class Circle extends Shape {
  constructor(color, text, strokeColor, textColor) {
    super(color, text, strokeColor, textColor);
  }

  render() {
    return `<svg width="300" height="200">
        <circle cx="50" cy="50" r="40" stroke="${this.strokeColor}" stroke-width="4" fill="${this.color}" />
        ${this.renderText()}</svg>`;
  }
}

class Square extends Shape {
  //inherits from Shape then overrides based on user input//
  constructor(color, text, strokeColor, textColor) {
    super(color, text, strokeColor, textColor);
  }
  render() {
    return `<svg width="250" height="250">
       <rect width="250" height="200"
      stroke="${this.strokeColor}" stroke-width="4" fill="${this.color}" />
      ${this.renderText()}</svg>`;
  }
}

const color = "blue";
const strokeColor = "blue";
const text = "SDH";
const textColor = "black";

const triangle = new Triangle(color, text, strokeColor, textColor);
console.log(triangle.render());

const circle = new Circle(color, text, strokeColor, textColor);
console.log(circle.render());

const square = new Square(color, text, strokeColor, textColor);
console.log(square.render());

module.exports = { Shape, Triangle, Circle, Square };
