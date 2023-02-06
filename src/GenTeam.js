const Employee = require("../lib/Employee")

function special (employee) {
    if (employee.gitHub) {
        return employee.gitHub 
    } else if (employee.officeNumber) {
        return employee.officeNumber
    } else if (employee.school) {
        return employee.school
    } else {
        return ' '
    };
     
}
 

function renderInput (response) {
    return  `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Gen</title>
    </head>
    <body>
    ${response.map(employee => (`
    <p>
    ${employee.name}
    </p>
    <p>
    ${employee.id}
    </p>
    <p>
    ${employee.email}
    </p>
    <p>
    ${special(employee)}
    </p>
    `))}
    
    </body>
    </html>
   
    `
};

module.exports = renderInput;