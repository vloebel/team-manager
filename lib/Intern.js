const Employee = require('./Employee');

class Intern extends Employee {
  constructor(firstName, lastName, id, email, school) {
    super(firstName, lastName, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return [this.school];
  }
 
}

module.exports = Intern;

