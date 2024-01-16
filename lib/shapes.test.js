

const { Shape, Triangle, Circle, Square } = require("./shapes");

describe("Shape", () => {
  test("Shape constructor sets color", () => {
    const color = "red";
    const shape = new Shape();
    shape.setColor(color);
    expect(shape.color).toBe(color);
    expect(new Shape(color).color).toBe(color);
  });
});

describe("Triangle", () => {
//test checks for the triangle constructor to set the color and stroke color//
test("Triangle render test successful", () => {
  const color = "green";
  const strokeColor = "blue";
  const triangle = new Triangle(color, strokeColor);
  expect(triangle.color).toBe(color);
  expect(triangle.strokeColor).toBe(strokeColor);
});

//test checks for the triangle render method to return the correct svg string//
test("Triangle render returns correct SVG string", () => {
  const color = "green";
  const strokeColor = "blue";
  const triangle = new Triangle(color, strokeColor);
  expect(triangle.render()).toBe(`<polygon points="50,15 100,100, 0,100" 
        style="fill:${color};
        stroke=${strokeColor};stroke-width:1" />`);
});
});

describe("Circle", () => {
//test checks for the circle constructor to set the color and stroke color//
test("Circle render test successful", () => {
  const color = "purple";
  const strokeColor = "blue";
  const circle = new Circle(color, strokeColor);
  expect(circle.color).toBe(color);
  expect(circle.strokeColor).toBe(strokeColor);
});

//test checks for the circle render method to return the correct svg string//
test("Circle render returns correct SVG string", () => {
  const color = "purple";
  const strokeColor = "blue";
  const circle = new Circle(color, strokeColor);
  expect(circle.render()).toBe(
    `<circle cx="50" cy="50" r="40" stroke="${strokeColor}" stroke-width="4" fill="${color}" />`
  );
});
});

describe("Square", () => {
//test checks for the square constructor to set the color and stroke color//
test("Square render test successful", () => {
  const color = "blue";
  const strokeColor = "blue";
  const square = new Square(color, strokeColor);
  expect(square.color).toBe(color);
  expect(square.strokeColor).toBe(strokeColor);
});

//test checks for the square render method to return the correct svg string//
test("Square render returns correct SVG string", () => {
  const color = "blue";
  const strokeColor = "blue";
  const square = new Square(color, strokeColor);
  expect(square.render()).toBe(`<rect width="100" 
       height="150"
       style="fill:${color};stroke=${strokeColor};stroke-width:2;fill-opacity:0.1" />`);
});
});