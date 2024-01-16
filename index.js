const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');

inquirer 
    .prompt([
        {
        type: 'input',
        name: 'text',
        message: 'Enter up to three chracters for your logo',
            validate: function(value) {
                if (value.length <= 3) {
                    return true;
                }
                return 'Please enter UP to 3 characters.';
            }
            },

            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color or hexadecimal value for the text'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color keyword or hexadecimal number for the shape color:'
            }
        ])
        .then(answers => { 
            let shape;
            switch (answers.shape) {
                case 'triangle':
                    shape = new Triangle();
                    break;
                case 'circle':
                    shape = new Circle();
                    break;
                case 'square':
                    shape = new Square();
                    break;
            }           
            shape.setColor(answers.shapeColor);

            const svg = shape.render();

            fs.writeFile('logo.svg', svg, (err) => {
                if (err) throw err;
                console.log('generated logo.svg and saved! congratulations!');
            });

        });         
