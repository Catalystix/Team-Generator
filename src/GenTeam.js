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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
    ${response.map(employee => (`
    <div class="container text-center">
    <div class="row"
    <div class="col">
    ${employee.name}
    </div>
    <div class="col">
    ${employee.id}
    </div>
    <div class="col">
    ${employee.email}
    </div>
    <div class="col">
    ${special(employee)}
    </div>
    </div>
    </div>
    `))}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
   
    `
};

module.exports = renderInput;