const promptTeam = require  ('./src/promptTeam');
const generateHTML = require('./src/generateHTML');
const { writeMarkup, copyCSS } = require ('./src/writeFiles');

const teamArray = []; //  array of team members

console.log(
  `===============  WELCOME TO TEAM BUILDER  ================
  
    This program creates a web page from the information you enter: 

      * One manager (required)
      * Any number of employees, engineers, and interns. 
    
    Team information is saved in "index.html" and "style.css"
    located in the ./dist directory, which must exist
    before running this program.
    
  ===========================================================
        Add New Team Member (all fields required)
  ===========================================================
  `);
let markupString = '';

promptTeam(teamArray)
  .then(teamArray => {
    // console.log("final team is " + JSON.stringify(teamArray));
    markupString = generateHTML(teamArray); 
    console.log (`writing html file`)
    writeMarkup(markupString);
    copyCSS();
    console.log (`Your information is ready in ./dist/index.html`)

  })
  
  
