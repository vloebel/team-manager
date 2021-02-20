// const fs = require('fs');
// const inquirer = require('inquirer');
const promptTeam = require('./src/promptTeam');

// const Employee = require('./lib/Employee.js');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');

const separator = (`===========================================================`);
const welcomeMsg = (`===============  WELCOME TO TEAM BUILDER  ================`);
const introMsg =
  (`This program creates a web page from the information you enter: 
    * Manager
    * an optional number of employees 
    * an optional number of engineers 
    * an optional number of interns.
  Your team information will be saved in the files "index.html" 
  and "style.css" located in the ./dist directory, which must
  exist before running this program.`);
  
const teamArray = []; // the array of team members

  // ====================================================
console.log(
  `===============  WELCOME TO TEAM BUILDER  ================
  
    This program creates a web page from the information you enter: 

      * One manager (required)
      * Any number of employees, engineers, and interns. 
    
    Team roster is saved in "index.html" and "style.css"
    located in the ./dist directory, which must exist
    before running this program.
    
  ===========================================================
        Add New Team Member (all fields required)
  ===========================================================
  `);
  
promptTeam(teamArray)
  .then( teamArray => {
    console.log("final team is " + JSON.stringify(teamArray));
    // stringToWrite = generateMarkup(answers)
    // writeFile(stringToWrite);
  });
