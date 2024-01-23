const { JSDOM } = require("jsdom");
const { Shape, Triangle, Circle, Square } = require("./shapes");


describe("Shape", () => {
  ///test checks for the shape constructor to set the color//
  test("Shape constructor sets color, strokeColor, text color, and text", () => {
    const color = "blue";
    const strokeColor = "blue";
    const textColor = "black";
    const text = "SDH";
    const shape = new Shape(color, text, strokeColor, textColor);

    // shape.setColor(color);
    expect(shape.color).toBe(color);
    expect(shape.strokeColor).toBe(strokeColor);
    expect(shape.textColor).toBe(textColor);
    expect(shape.text).toBe(text);
    // expect(new Shape(color).color).toBe(color);
  });
  //test checks for successful text render//
  test("Shape render shows text", () => {
    const color = "blue";
    const text = "SDH";
    const strokeColor = "blue";
    const textColor = "black";
    const shapes = [
      new Triangle(color, text, strokeColor, textColor),
      new Circle(color, text, strokeColor, textColor),
      new Square(color, text, strokeColor, textColor),
    ];

    shapes.forEach((shape) => {
      const svg = shape.render();
      const dom = new JSDOM(svg);
      const textElement = dom.window.document.querySelector("text");
      expect(textElement).not.toBeNull();
      expect(textElement.textContent.trim()).toBe(text);
    });
  });
});

describe("Triangle", () => {
  //test checks for the triangle constructor to set the color and stroke color//
  test("Triangle render test successful", () => {
    const color = "blue";
    const text = "SDH";
    const strokeColor = "blue";
    const textColor = "black";
    const triangle = new Triangle(color, text, strokeColor, textColor);
    expect(triangle.render()).toContain(color);
    expect(triangle.render()).toContain(strokeColor);
    expect(triangle.render()).toContain(text);
    expect(triangle.render()).toContain(textColor);
  });

  //test checks for the triangle render method to return the correct svg string//
  test("Triangle render returns correct SVG string", () => {
    const color = "blue";
    const text = "SDH";
    const strokeColor = "blue";
    const textColor = "black";
    const triangle = new Triangle(color, text, strokeColor, textColor);
    expect(triangle.render().trim()).toBe(`<svg width="300" height="200">\n<polygon points="50,15 100,100, 0,100" style="fill:${color};stroke:${strokeColor};stroke-width:1" />\n<text x="50" y="50" font-family="Verdana" font-size="20" fill="${textColor}">${text}</text>\n</svg>`);
  });
});

describe("Circle", () => {
  //test checks for the circle constructor to set the color and stroke color//
  test("Circle render test successful", () => {
    const color = "blue";
    const text = "SDH";
    const strokeColor = "blue";
    const textColor = "black";
    const circle = new Circle(color, text, strokeColor, textColor);
    expect(circle.color).toBe(color);
    expect(circle.strokeColor).toBe(strokeColor);
    expect(circle.text).toBe(text);
    expect(circle.textColor).toBe(textColor);
  });

  //test checks for the circle render method to return the correct svg string//
  test("Circle render returns correct SVG string", () => {
    const color = "blue";
    const strokeColor = "blue";
    const text = "SDH";
    const textColor = "black";
    const circle = new Circle(color, text, strokeColor, textColor);
    expect(circle.render().trim()).toBe(`<svg width="300" height="200"><circle cx="50" cy="50" r="40" stroke="${strokeColor}" stroke-width="4" fill="${color}" />${circle.renderText()}</svg>`);
  });
});

describe("Square", () => {
  //test checks for the square constructor to set the color and stroke color//
  test("Square render test successful", () => {
    const color = "blue";
    const strokeColor = "blue";
    const text = "SDH";
    const textColor = "black";
    const square = new Square(color, text, strokeColor, textColor);
    expect(square.color).toBe(color);
    expect(square.strokeColor).toBe(strokeColor);
    expect(square.text).toBe(text);
    expect(square.textColor).toBe(textColor);
  });

  //test checks for the square render method to return the correct svg string//
  test("Square render returns correct SVG string", () => {
    const color = "blue";
    const strokeColor = "blue";
    const text = "SDH";
    const textColor = "black";
    const square = new Square(color, text, strokeColor, textColor);
    expect(square.render().trim()).toBe(`<svg width="250" height="250"><rect width="250" height="200" style="fill:${color};stroke:${strokeColor};stroke-width:2;fill-opacity:0.1" />${square.renderText()}</svg>`);
  });
}); // Add this line to close the describe block
