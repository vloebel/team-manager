const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(firstName, lastName, id, email, github) {
    super(firstName, lastName, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return [this.github];
  }
 
}

module.exports = Engineer;

