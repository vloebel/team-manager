const Employee = require('../lib/Employee.js');

// ToDo: algorithm for employee ID generation
const maxEmployees = 100

// to run: "npm test Employee"
// Employee object is expected: (firstName, lastName, id, email)
// Test 00 builds an object with the expected input and should succeed
// Remaining tests each pass in one invalid parameter and should fail
// They are basically to test the tests and will be commented out for development

test('Create Employee obj with expected values', () => {
  const emp = new Employee ("Bernard", "Benjamin", 14, "bernie@fnpf.org");
  expect(emp.firstName).toEqual(expect.any(String));
  expect(emp.firstName).not.toEqual("");

  expect(emp.lastName).toEqual(expect.any(String))
  expect(emp.lastName).not.toEqual("");

  expect(emp.id).toEqual(expect.any(Number));
  expect(emp.id).toBeGreaterThan(0);
  expect(emp.id).toBeLessThan(maxEmployees);

  expect(emp.email).toMatch('@');
  expect(emp.email).toMatch('.');

  expect(emp.role).toMatch("Employee");
});

// ***********************************************************
// *****  THESE VALIDATE THE TEST CONDITIONS *****************
// *******  They are for development only  *******************
// ***********************************************************

// test('Test 01: create Employee obj with empty firstName', () => {
//   const emp = new Employee("", "Benjamin", 14, "bernie@fnpf.org");
//   expect(emp.firstName).toEqual(expect.any(String));
//   expect(emp.firstName).not.toEqual("");
//   expect(emp.lastName).toEqual(expect.any(String))
//   expect(emp.lastName).not.toEqual("");
//   expect(emp.id).toEqual(expect.any(Number));
//   expect(emp.id).toBeGreaterThan(0);
//   expect(emp.id).toBeLessThan(maxEmployees);
//   expect(emp.email).toEqual(expect.any(String));
//   expect(emp.email).toMatch('@');
//   expect(emp.email).toMatch('.');
//   expect(emp.role).toMatch("Employee");
// });

// test('Test 02: create Employee obj with empty lastName', () => {
//   const emp = new Employee("Bernie", "", 14, "bernie@fnpf.org");
//   expect(emp.firstName).toEqual(expect.any(String));
//   expect(emp.firstName).not.toEqual("");
//   expect(emp.lastName).toEqual(expect.any(String))
//   expect(emp.lastName).not.toEqual("");
//   expect(emp.id).toEqual(expect.any(Number));
//   expect(emp.id).toBeGreaterThan(0);
//   expect(emp.id).toBeLessThan(maxEmployees);
//   expect(emp.email).toEqual(expect.any(String));
//   expect(emp.email).toMatch('@');
//   expect(emp.email).toMatch('.');
//   expect(emp.role).toMatch("Employee");
// });

// test('Test 03: create Employee obj with id out of range', () => {
//   const emp = new Employee("Bernie", "Benjamin", 0 , "bernie@fnpf.org");
//   expect(emp.firstName).toEqual(expect.any(String));
//   expect(emp.firstName).not.toEqual("");
//   expect(emp.lastName).toEqual(expect.any(String))
//   expect(emp.lastName).not.toEqual("");
//   expect(emp.id).toEqual(expect.any(Number));
//   expect(emp.id).toBeGreaterThan(0);
//   expect(emp.id).toBeLessThan(maxEmployees);
//   expect(emp.email).toEqual(expect.any(String));
//   expect(emp.email).toMatch('@');
//   expect(emp.email).toMatch('.');
//   expect(emp.role).toMatch("Employee");
// });

// test(`Test 04: Employee obj missing '@' in email`, () => {
//   const emp = new Employee("Bernie", "Benjamin", 14, "BernieBenjaminfnpf.org");
//   expect(emp.firstName).toEqual(expect.any(String));
//   expect(emp.firstName).not.toEqual("");
//   expect(emp.lastName).toEqual(expect.any(String))
//   expect(emp.lastName).not.toEqual("");
//   expect(emp.id).toEqual(expect.any(Number));
//   expect(emp.id).toBeGreaterThan(0);
//   expect(emp.id).toBeLessThan(maxEmployees);
//   expect(emp.email).toEqual(expect.any(String));
//   expect(emp.email).toMatch('@');
//   expect(emp.email).toMatch('.');
//   expect(emp.role).toMatch("Employee");
// });

// test(`Test 05: Employee obj missing '.' in email`, () => {
//   const emp = new Employee("Bernie", "Benjamin", 14, "bernie@fnpforg");
//   expect(emp.firstName).toEqual(expect.any(String));
//   expect(emp.firstName).not.toEqual("");
//   expect(emp.lastName).toEqual(expect.any(String))
//   expect(emp.lastName).not.toEqual("");
//   expect(emp.id).toEqual(expect.any(Number));
//   expect(emp.id).toBeGreaterThan(0);
//   expect(emp.id).toBeLessThan(maxEmployees);
//   expect(emp.email).toEqual(expect.any(String));
//   expect(emp.email).toMatch('@');
//   expect(emp.email).toMatch('.');
//   expect(emp.role).toMatch("Employee");
// });


// test(`Test 07: create Employee obj w mismatched role"`, () => {
//   const emp = new Employee("Bernie", "Benjamin", 25, "bernie@fnpf.org", "Berniefnfp");
//   emp.role="Engineer" // Constructor returns "Employee"
//   expect(emp.firstName).toEqual(expect.any(String));
//   expect(emp.firstName).not.toEqual("");
//   expect(emp.lastName).toEqual(expect.any(String))
//   expect(emp.lastName).not.toEqual("");
//   expect(emp.id).toEqual(expect.any(Number));
//   expect(emp.id).toBeGreaterThan(0);
//   expect(emp.id).toBeLessThan(maxEmployees);
//   expect(emp.email).toEqual(expect.any(String));
//   expect(emp.email).toMatch('@');
//   expect(emp.email).toMatch('.');
//   expect(emp.role).toMatch("Employee");
// });
