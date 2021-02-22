const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

///////////////////////////////////////////////////////
// FUNCTION generateManagerCard (team Array)
// Selects the (unique) manager from the team array 
// and creates HTML markup with that information  
// RETURNS the manager-card markup string
///////////////////////////////////////////////////////
const generateManagerCard = (teamArr) => {
  const managerArr = teamArr.filter(element => element.role === "Manager");
  // there's only one manager so we know it's in position 0 
  let managerMarkup = `
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
  return managerMarkup;
}
///////////////////////////////////////////////////////
// FUNCTION generateEmployeeCards (team Array)
// Filters the employees from the team array and
// Creates HTML markup with a card for each one 
// RETURNS the employee-card markup string
///////////////////////////////////////////////////////
const generateEmployeeCards = (teamArr) => {
  const empArr = teamArr.filter(element => element.role === "Employee");
  let employeeMarkup = empArr.map(emp => {
    return `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${emp.firstName} ${emp.lastName}</h4>
    <h4 class="card-title">${emp.role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${emp.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${emp.email}" class="card-link">${emp.email}</a></li>
  </ul>
</div>
  `
  }).join(``);

  return employeeMarkup;
};
///////////////////////////////////////////////////////
// FUNCTION generateEngineerCards (team Array)
// Filters the engineers from the team array and
// Creates HTML markup with a card for each engineer 
// RETURNS the engineer-card markup string
///////////////////////////////////////////////////////
const generateEngineerCards = (teamArr) => {
  const engArr = teamArr.filter(element => element.role === "Engineer");
  let engineerMarkup = engArr.map(eng => {
    return `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${eng.firstName} ${eng.lastName}</h4>
    <h4 class="card-title">${eng.role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${eng.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${eng.email}" class="card-link">${eng.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${eng.github}" class="card-link">${eng.github}</a></li>
  </ul>
</div>
  `
  }).join(``);

  return engineerMarkup;
};

///////////////////////////////////////////////////////
// FUNCTION generateInternCards (team Array)
// Filters the interns from the team array and
// Creates HTML markup with a card for each one 
// RETURNS the intern-card markup string
///////////////////////////////////////////////////////
const generateInternCards = (teamArr) => {
  const internArr = teamArr.filter(element => element.role === "Employee");
  let employeeMarkup = internArr.map(intern => {
    return `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${intern.firstName} ${intern.lastName}</h4>
    <h4 class="card-title">${intern.role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
  `
  }).join(``);

  return employeeMarkup;
};

/////////////////////////////////////////////////////
//  FUNCTION GENERATE HTML (team Array)
//  accepts the team array and generates an HTML page
//  displaying cords for the manager and each type of
//  employee on the team, grouped by type
//  RETURNS the web page markup string
/////////////////////////////////////////////////
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
    ${generateManagerCard(teamArray)}
    ${generateEngineerCards(teamArray)}
    ${generateEmployeeCards(teamArray)}
    ${generateInternCards(teamArray)}    
    <!------------------Generated cards row ------------------------->
    </div>
  </main>  
</body>
</html>
`;
  return (siteMarkup);
}

module.exports = generateHTML;