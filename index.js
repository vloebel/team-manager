const fs = require('fs');
const inquirer = require('inquirer');

class Employee {
  constructor(firstName, lastName, id, email) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.id = id;
    this.email = email;
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
  return "Employee"
  }
}

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee{
  constructor(github) { // user name
    this.github = github;
  }
  getGithub() {
    
  }
  getRole() {
    return "Engineer";
  }
  }

  class Intern extends Employee{
    constructor(school) { // user name
      this.school = school;
    }
    getSchool() {
      
    }
    getRole() {
      return "Intern";
    }
    }
  












// Prompt the user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    // Bonus: Generate the name of your user file from their input
    const filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json';
// NOTE: STRINGIFY TAKES THE KEY/VALUE PAIRS AND TURNS THEM TAB DELIMITED STRINGS
// JSON.stringify(value[, replacer[, space]]) 
// value is the value to convert to a string - in this case, our data object
// if replacer is null, all properties of the value object are included
// space (or tab) is white space to insert. a number indicates a number of spaces <10
//
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });
