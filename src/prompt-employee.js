const Employee = require('../lib/Employee');

/////////////////////////////////////
// function promptTeamMember
// prompts for the next teamMember info
// creates the object and pushes it onto teamMember[]
// calls promptTeamMember again to add more
// returns teamMember[]
//////////////////////////////////////////////

const promptTeamMember = () => {

  console.log(`
=====================
Add a New Team Member
(all fields required)
=====================
`);
  
   // If there's no teamMember array, create one
   if (!teamMember) {
    teamMember = [];
  }

  return inquirer
    .prompt([
    {
      type: 'input',
      name: 'fName',
      message: 'First Name:',
      validate: nameInput => {
        if (nameInput) {
          // validate only letters entered
          // and then force name capitalization
          if (/^[a-zA-Z]+$/.test(nameInput)) {
            nameInput = (nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase());
            return true;
          } else {
            console.log(`English letters only, please`);
            return false;
          }
          // no nameInput //   
        } else return false;
      }
    },
    {
      type: 'input',
      name: 'lName',
      message: 'Last Name:',
      validate: nameInput => {
        if (nameInput) {
          // validate only letters entered
          // and then force name capitalization
          if (/^[a-zA-Z]+$/.test(nameInput)) {
            nameInput = (nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase());
            return true;
          } else {
            console.log(`English letters only, please`);
            return false;
          }
          // no nameInput //   
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
      type: 'confirm',
      name: 'confirmAdd',
      message: 'Would you like to enter another teamMember?',
      default: false
    }
  ])
  .then(teamMemberData => {
    let temp = new Employee(teamMemberData.fname, teamMemberData.lname, 21, "myemail");
    teamMembers.push(temp);
    console.log(`current team: ${teamMembers}`)
    if (teamMemberData.confirmAdd) {
      return promptteamMember(teamMembers);
    } else {
      return (teamMembers);
    }
  });
};

const myTeam = promptTeamMember();
console.log(`here's the final team ${myTeam}`);