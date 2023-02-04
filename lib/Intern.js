const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school
    }

    getSchool() {
        console.log(`School ${this.school}`)
        return 'School'

    }
    getRole() {
        if (this.school = true)
            return 'Inturn'
        else return 'Employee'
    }

}

module.exports = Intern;