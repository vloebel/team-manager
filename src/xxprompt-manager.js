const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer'); ////?????????????????
const Intern = require('../lib/Intern');


/////////////////////////////////////
// function promptTeam
// prompts for the next teamMember info
// creates the object and pushes it onto teamMember[]
// calls promptTeam again to add more
// returns teamMember[]
//////////////////////////////////////////////

const promptTeam = (teamArr) => {

  console.log(`
=====================
Add a New Team Member
(all fields required)
=====================
`);

return inquirer
  .prompt([
    {
      type: 'input',
      name: 'fName',
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
      name: 'lName',
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
        if (inputStr) {
          // allows numbers, letters, @ and .
          if (/^[a-zA-Z0-9.@]+$/.test(inputStr)) {
            return true;
          } else {
            console.log(`Please enter a valid email of the form user-name@my-organization.domain:`);
            return false;
          }
          // no input  
        } else return false;
      }
    },
  {
      type: 'list',
      name: 'role',
      message: "Use arrow keys to select team member's role:",
      choices: ['Employee', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'github',
      message: `Engineer's github user name:`,
      when: (inquirerData) => inquirerData.role === "Engineer"
    },
    {
      type: 'input',
      name: 'school',
      message: `Intern's school:`,
      when: (inquirerData) => inquirerData.role === "Intern",
    },
    {
      type: 'confirm',
      name: 'confirmAddAnother',
      message: 'Would you like to enter another teamMember?',
      default: false
    }
  ])
    .then(inquirerData => {

      console.log("RAW inquirerData is " + JSON.stringify(inquirerData));

      // force "proper noun" case for names
      inquirerData.fName = (inquirerData.fName.charAt(0).toUpperCase() + inquirerData.fName.slice(1).toLowerCase());
      inquirerData.lName = (inquirerData.lName.charAt(0).toUpperCase() + inquirerData.lName.slice(1).toLowerCase());
      switch (inquirerData.role) {
        case "Employee":
          teamArr.push(
            new Employee(inquirerData.fName,
              inquirerData.lName,
              inquirerData.id,
              inquirerData.email));
          break;
        case "Engineer":
          teamArr.push(
            new Engineer(inquirerData.fName,
              inquirerData.lName,
              inquirerData.id,
              inquirerData.email,
              inquirerData.github));
          break;
        case "Intern":
          teamArr.push(
            new Intern(inquirerData.fName,
              inquirerData.lName,
              inquirerData.id,
              inquirerData.email,
              inquirerData.school));
          break;
        default:
          throw ('Invalid team-member role in promptTeam');
      }

      // console.log("team is" + JSON.stringify(teamArr))

      if (inquirerData.confirmAddAnother) {
        return promptTeam(teamArr);
      } else return (teamArr);
    });
};


var myTeam = [];
promptTeam(myTeam)
  .then( myTeam => {
    console.log("final team is " + JSON.stringify(myTeam));
    // stringToWrite = generateMarkup(answers)
    // writeFile(stringToWrite);
  });
