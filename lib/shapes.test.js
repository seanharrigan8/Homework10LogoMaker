
const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
    test('Shape constructor sets color', () => {
        const color = 'red';
        const shape = new Shape();
        shape.setColor(color)
        expect(shape.color).toBe('color')
        ;
    });
});


test('Triangle render test successful', () => {
    const color = 'green';
    const triangle = new Triangle(color);
    expect(triangle.color).toBe(color);
});

test('Circle render test successful', () => {
    const color = 'purple';
    const circle = new Circle('color');
    expect(circle.color).toBe(color);
});

test('Square render test successful', () => {
    const color = 'blue';
    const square = new Square('color');
    expect(square.color).toBe(color);
});

