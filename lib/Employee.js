
class Employee {
  constructor(firstName, lastName, id, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    return [this.Lastname, this.firstName];
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
