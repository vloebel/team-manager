const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateManager = (teamArr) => {
  // get the manager
  console.log(`GM starting team array: ${JSON.stringify(teamArr)}`);
  const managerArr = teamArr.filter(element => element.role === "Manager");
  console.log(`GM returned manager array: ${JSON.stringify(managerArr)}`);
  // there's only one manager so we know it's in position 0 
  let managerMarkup=`
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${managerArr[0].firstName} ${managerArr[0].lastName}</h4>
    <h4 class="card-title">${managerArr[0].role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managerArr[0].id}</li>
    <li class="list-group-item">Email: <a href="mailto:${managerArr[0].email}" class="card-link">${managerArr[0].email}</a></li>
    <li class="list-group-item">Office Number: <a href="https://github.com/${managerArr[0].officeNumber}" class="card-link">${managerArr[0].officeNumber}</a></li>
  </ul>
</div>
  `;
  console.log(`FINISHED MANAGER MARKUP`)
  return managerMarkup;
}
///////////////////////////////////////////////////////
const generateEngineer = (teamArr) => {
  // get the Engineers
  const engArr = teamArr.filter(element => element.role === "Engineer");
  console.log(`GM created engineer array: ${JSON.stringify(engArr)}`);
  let engineerMarkup = engArr.foreach(eng => {
    `<div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${eng.firstName} ${eng.lastName}</h4>
    <h4 class="card-title">${eng.role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${eng.id}</li>
    <li class="list-group-item">Email:<a href="mailto:${eng.email}" class="card-link">${eng.email}</a></li>
    <li class="list-group-item">Github:<a href="https://github.com/${eng.github}" class="card-link">${eng.github}</a></li>
  </ul>
</div>
  `
  }).join(``);
  
  console.log(`FINISHED ENGINEER MARKUP`)
  return engineerMarkup;
}

// export function to generate entire page
const generateHTML = (teamArray) => {
  let siteMarkup =
    `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./style.css" />
  <title>Team Builder</title>
</head>

<body>
  <header class="jumbotron">
    <h1>MY TEAM</h1>
  </header>
  <main class="container">
    <div id="card-section" class = "row ">
    <!------------------Generated cards row ------------------------->
    ${generateManager(teamArray)}
    ${generateEmployees(teamArray)}

  
    
    <!------------------Generated cards row ------------------------->
    </div>
  </main>  
</body>

</html>
`;
  console.log(`***************************\nFINISHED SITE MARKUP`)
  return (siteMarkup);
}

module.exports = generateHTML;