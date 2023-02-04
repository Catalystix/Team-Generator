// node modules
const genTeam = require('./src/GenTeam');
const fs = require('fs');
const inquirer = require('inquirer');
// link lib modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const newEmpdata = [];

inquirer
    .promt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'what is your id number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'what is your github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'what school do you attend?',
            name: 'school',
        },
        {
            type: 'input',
            message: 'what is your office number?',
            name: 'onumber',
        },
    ])
    .then((Response) => {
        writeToFile('index.html', response);
        console.log('Thanks for Your information')
        console.log('response list', response)
    });

    function writeToFile(filename, response) {
        fs.writeFile('index.html', genTeam(response), (err) =>
        err ? console.error(err) : console.log('add log'))
    }