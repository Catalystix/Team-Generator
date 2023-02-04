// node modules
const genTeam = require('./src/GenTeam');
const fs = require('fs');
const inquirer = require('inquirer');
// link lib modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const newEmpdata = [];

const response = await inquirer
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
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
       
    ])

if (response.role === 'Manager') {
    const managerQ = await inquirer
        .promt([
            {
                type: 'input',
                message: 'what is your office number?',
                name: 'onumber',
            },
        ])
    const newManager = new Manager(
        response.name,
        response.id,
        response.email,
        managerQ.onumber,
    );
    newEmpdata.push(newManager);

} else if (response.role === 'Engineer') {
    const engineerQ = await inquirer
    .promt([
        {
            type: 'input',
            message: 'what is your github username?',
            name: 'github',
        },        
    ])
    const newEngineer = new Engineer (
        response.name,
        response.id,
        response.email,
        engineerQ.github
    );
    newEmpdata.push(newEngineer);

} else if (response.role === 'Intern') {
    const internQ = await inquirer
    .promt ([
        {
            type: 'input',
            message: 'what school do you attend?',
            name: 'school',
        },
    ])
    const newIntern = new Intern (
        response.name,
        response.id,
        response.email,
        internQ.school
    );
    newEmpdata.push(newIntern);
}

    .then((Response) => {
    writeToFile('index.html', response);
    console.log('Thanks for Your information')
    console.log('response list', response)
});

function writeToFile(filename, response) {
    fs.writeFile('index.html', genTeam(response), (err) =>
        err ? console.error(err) : console.log('add log'))
}