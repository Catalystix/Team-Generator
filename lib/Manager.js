const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        if (this.officeNumber = true)
            return 'Manager'
        else return 'Employee'
    }

}
module.exports = Manager;
