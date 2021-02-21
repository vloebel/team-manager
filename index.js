const promptTeam = require('./src/promptTeam');
const generateHTML = require('./src/generateHTML');
const writeMarkup = require('/.writeFiles');
const copyCSS = require('/.writeFiles');

const teamArray = []; //  array of team members

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
const markupString = '';

promptTeam(teamArray)
  .then(teamArray => {
    // console.log("final team is " + JSON.stringify(teamArray));
    console.log (`generating markup`)
    markupString = generateHTML(teamArray); 
    console.log (`writing html`)
    writeMarkup(markupString);
  })
  console.log (`copying style sheet`)
  copyCSS();
  
