const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

inquirer
  .prompt([
    {
      //user input prompt for logo name//
      type: "input",
      name: "text",
      message: "Enter up to three chracters for your logo",
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        }
        //error catch if answer is more than 3 characters//
        return "Please enter UP to 3 characters.";
      },
    },

    {
      //user prompt for text color//
      type: "input",
      name: "textColor",
      message: "Please enter a color or hexadecimal value for the text",
      validate: function (value) {
        const isValidColorKeyword = /^([a-z]+)$/i.test(value);
        const isValidHexadecimalColorCode =
          /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);

        if (isValidColorKeyword || isValidHexadecimalColorCode) {
          return true;
        } else {
          return "Please enter a valid color keyword or hexadecimal color code.";
        }
      },
    },

    {
      //user prompt list for shape with options of circle, triangle, square //
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      //user prompt for shape color. Includes error handler//
      type: "input",
      name: "shapeColor",
      message:
        "Enter a color keyword or hexadecimal number for the shape color:",
      validate: function (value) {
        const isValidColorKeyword = /^([a-z]+)$/i.test(value);
        const isValidHexadecimalColorCode =
          /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);

        if (isValidColorKeyword || isValidHexadecimalColorCode) {
          return true;
        } else {
          return "Please enter a valid color keyword or hexadecimal color code.";
        }
      },
    },
    {
        type: "input",
        name: "strokeColor",
        message: "Enter a color keyword or hexadecimal number for the outline color:",
        validate: function (value) {
            const isValidColorKeyword = /^([a-z]+)$/i.test(value);
            const isValidHexadecimalColorCode = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
            
            if (isValidColorKeyword || isValidHexadecimalColorCode) {
                return true;
            } else {
                return "Please enter a valid color keyword or hexadecimal color code.";
            }
        },
    }
  ])

  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "triangle":
        shape = new Triangle(answers.shapeColor);
        break;
      case "circle":
        shape = new Circle(answers.shapeColor);
        break;
      case "square":
        shape = new Square(answers.shapeColor);
        break;
      default:
        console.log("Invalid shape. Please try again.;");
        return;
    }
    shape.setColor(answers.shapeColor);

    const svg = shape.render();

    fs.writeFile("logo.svg", svg, (err) => {
      if (err) throw err;
      console.log("generated logo.svg and saved! congratulations!");
    });
  });
