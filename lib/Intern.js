const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }

    getSchool() {
        console.log(`School ${this.school}`)
        return 'School'

    }
    getRole() {
        if (this.school = true)
            return 'Intern'
        else return 'Employee'
    }

}

module.exports = Intern;