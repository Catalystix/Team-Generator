const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        if (this.officeNumber = true)
            return 'Manager'
        else return 'Employee'
    }

}
module.exports = Manager;
