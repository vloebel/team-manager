const Employee = require('./Employee');

class Manager extends Employee {
  constructor(firstName, lastName, id, email, officeNumber) {
    super(firstName, lastName, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  officeNumber() {
    return [this.officeNumber];
  }
 
}

module.exports = Manager;

