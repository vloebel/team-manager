const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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

  // ====================================================
console.log(separator);
console.log(welcomeMsg);
console.log(separator);
console.log(introMsg);
console.log(separator);
    
//promptManager ();
//.then promptTeam();

