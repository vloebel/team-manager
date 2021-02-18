
class Employee {
  constructor(firstName, lastName, id, email) {
    this.lastName = lastName;
    this.firstName = firstName;
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

// myTeam[i] = new Employee ('Pratchett','Terry', id, email)