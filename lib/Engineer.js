const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub
    }

    getGitHub() {
    console.log(`gitHub ${gitHub}`)
    return this.gitHub
    }
    getRole() {
        if (this.gitHub = true)
        return 'Engineer'
        else return 'Employee'   
    }
}
module.exports = Engineer;
