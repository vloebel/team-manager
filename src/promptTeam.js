const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

var managerExists = false;

/////////////////////////////////////
// function promptTeam
//  * prompts for teamMember info
//  * Role can be Manager / Engineer / Intern / Employee
//  * Exactly one Manager must be provided
//  * creates new object and pushes onto team Array
//  * returns the team Array
//////////////////////////////////////////////

const promptTeam = (teamArr) => {
  return inquirer.prompt([
    //display role: Manager option until we get one
    //role choice determines followup questions below
    { 
      type: 'list',
      name: 'role',
      message: "Use arrow keys to select team-member's role:",
      choices: ['Manager', 'Employee', 'Engineer', 'Intern'],
      when: (!managerExists),
    },
    {
      type: 'list',
      name: 'role',
      message: "Use arrow keys to select team-member's role:",
      choices: ['Employee', 'Engineer', 'Intern'],
      when: (managerExists),
    },
    {
      type: 'input',
      name: 'firstName',
      message: 'First Name:',
      validate: inputStr => {
        if (inputStr) {
          // validate only letters entered
          if (/^[a-zA-Z]+$/.test(inputStr)) {
            return true;
          } else {
            console.log(`\nEnglish letters only, please:`);
            return false;
          }
          // no inputStr 
        } else return false;
      }
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Last Name:',
      validate: inputStr => {
        if (inputStr) {
          // validate only letters entered
          if (/^[a-zA-Z]+$/.test(inputStr)) {
            return true;
          } else {
            console.log(`\nEnglish letters only, please`);
            return false;
          }
          // no inputStr  
        } else return false;
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'ID:',
      validate: inputStr => {
        if (inputStr) {
          // validate only numbers entered
          if (/^[0-9]+$/.test(inputStr)) {
            return true;
          } else {
            console.log(`\nID must be a number:`);
            return false;
          }
          // no input  
        } else return false;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'email:',
      validate: inputStr => {
        if (inputStr) return true;
        else return false;
      }
    },
    // if this is a Manager, prompt for office number
    {
      type: 'input',
      name: 'officeNumber',
      message: `Manager's office number:`,
      when: (inquirerData) => inquirerData.role === "Manager",
      validate: inputStr => {
        if (inputStr) {
          if (/^[0-9]+$/.test(inputStr)) {
            managerExists = true;
            return true;
          } else {
            console.log(`\nOffice must be a number:`);
            return false;
          }
          // no input  
        } else return false;
      }
    },
    // if this is an Engineer, prompt for github user name
    {
      type: 'input',
      name: 'github',
      message: `Engineer's github user name:`,
      when: (inquirerData) => inquirerData.role === "Engineer"
    },
    // if this is an Intern, prompt for school name

    {
      type: 'input',
      name: 'school',
      message: `Intern's school:`,
      when: (inquirerData) => inquirerData.role === "Intern",
    },
    // Prompt to add another Employee?
    {
      type: 'confirm',
      name: 'confirmAddAnother',
      message: 'Would you like to enter another teamMember?',
      default: false
    }
  ])
  .then(inquirerData => {

    // console.log("RAW inquirerData is " + JSON.stringify(inquirerData));

    // force "proper noun" case for names
    inquirerData.firstName = (inquirerData.firstName.charAt(0).toUpperCase() + inquirerData.firstName.slice(1).toLowerCase());
    inquirerData.lastName = (inquirerData.lastName.charAt(0).toUpperCase() + inquirerData.lastName.slice(1).toLowerCase());

    // create the corresponding team-member object
    // and push it onto the team array
    // we don't have to push "role" because that's
    // defined in each object already
    switch (inquirerData.role) {
      case "Manager":
        teamArr.push(
          new Manager(inquirerData.firstName,
            inquirerData.lastName,
            inquirerData.id,
            inquirerData.email,
            inquirerData.officeNumber));
        break;
      case "Employee":
        teamArr.push(
          new Employee(inquirerData.firstName,
            inquirerData.lastName,
            inquirerData.id,
            inquirerData.email));
        break;
      case "Engineer":
        teamArr.push(
          new Engineer(inquirerData.firstName,
            inquirerData.lastName,
            inquirerData.id,
            inquirerData.email,
            inquirerData.github));
        break;
      case "Intern":
        teamArr.push(
          new Intern(inquirerData.firstName,
            inquirerData.lastName,
            inquirerData.id,
            inquirerData.email,
            inquirerData.school));
        break;
      default:
        throw ('Invalid team-member role in promptTeam');
    }
    ////////////////////////////////////////////
    // check confirmAddAnother for exit request
    ////////////////////////////////////////////
  
    if (inquirerData.confirmAddAnother) {
      return promptTeam(teamArr);
      // exit request but no manager yet
    } else if (!managerExists) {
      console.log(`\n** Sorry - Your team must have a manager.`);
      return promptTeam(teamArr);
      // exit request - all good
    } else return (teamArr);
  });
};

module.exports = promptTeam; 