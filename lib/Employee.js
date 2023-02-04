class Employee {

    constructor(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }

    getName() {
        console.log(`name ${this.name}`);
        return this.name
    }
    getId() {
        console.log(`id ${this.id}`);
        return this.id

    }
    getEmail() {
        console.log(`Email ${this.email}`);
        return this.email
    }

    getRole() { 
        console.log(`Role ${Employee}`);
        return 'Employee';

    }
    // // Employee.prototype.id = function(id) {
    // //     const newId = this.id
    // }

}

// // Employee.prototype.id = function(id) {
// //     const newId = this.id
// }


module.exports = Employee;