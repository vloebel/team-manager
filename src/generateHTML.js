const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateManager = (teamArr) => {
  // get the manager
  const managerArr = teamArr.map("Manager");
  // there's only one manager so we know it's in position 0 
  return (`
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${managerArr[0].firstName} ${managerArr[0].lastName}</h4>
    <h4 class="card-title">${managerArr[0].role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${managerArr[0].ID}</li>
    <li class="list-group-item">Email:<a href="mailto:${managerArr[0].email}" class="card-link">${managerArr[0].email}</a></li>
    <li class="list-group-item">Github:<a href="https://github.com/${managerArr[0].github}" class="card-link">${managerArr[0].github}</a></li>
  </ul>
</div>
  `);
}
///////////////////////////////////////////////////////


// export function to generate entire page
const generateHTML = (teamArray) => {
  return (`
<!DOCTYPE html>
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
    
    
        <!------------------Generated cards row ------------------------->
    </div>
  </main>  
</body>

</html>
`)
}

module.exports = generateHTML;