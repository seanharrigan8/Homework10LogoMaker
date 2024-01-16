const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
    .prompt([
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    ])
    .then(answers => { 
        console.log(`Hi ${answers['name']}!`)
    });         