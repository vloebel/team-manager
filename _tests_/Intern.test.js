const Intern = require('../lib/Intern.js');

// ToDo: algorithm for employee ID generation
const maxEmployees = 100

// to run: "npm test Intern"
// Intern object is expected: (firstName, lastName, id, email, school)
// Test 00 builds an object with the expected input and should succeed
// Remaining tests each pass in one invalid parameter and should fail

test('Test 00: create Intern obj with expected values', () => {
  const intern = new Intern ("Sandro", "Botticelli", 25, "sandrobotticelli@fnpf.org", "Falstaff University");
  expect(intern.firstName).toEqual(expect.any(String));
  expect(intern.firstName).not.toEqual("");

  expect(intern.lastName).toEqual(expect.any(String))
  expect(intern.lastName).not.toEqual("");

  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.id).toBeGreaterThan(0);
  expect(intern.id).toBeLessThan(maxEmployees);

  expect(intern.email).toMatch('@');
  expect(intern.email).toMatch('.');

  expect(intern.school).toEqual(expect.any(String));
  expect(intern.school).not.toEqual("");
  
  expect(intern.role).toMatch("Intern");
});

// ***********************************************************
// *****  THESE VALIDATE THE TEST CONDITIONS *****************
// *******  They are for development only  *******************
// ***********************************************************

// test('Test 01: create Intern obj with empty firstName', () => {
//   const intern = new Intern("", "botticelli", 25, "sandrobotticelli@fnpf.org", "sandrofnfp");
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");

//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });

// test('Test 02: create Intern obj with empty lastName', () => {
//   const intern = new Intern("sandro", "", 25, "sandrobotticelli@fnpf.org", "sandrofnfp");
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");
//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });

// test('Test 03: create Intern obj with id out of range', () => {
//   const intern = new Intern("sandro", "botticelli", maxEmployees+1 , "sandrobotticelli@fnpf.org", "sandrofnfp");
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");
//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });

// test(`Test 04: Intern obj missing '@' in email`, () => {
//   const intern = new Intern("sandro", "botticelli", 25, "sandrobotticellifnpf.org", "sandrofnfp");
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");
//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });

// test(`Test 05: Intern obj missing '.' in email`, () => {
//   const intern = new Intern("sandro", "botticelli", 25, "sandrobotticelli@fnpforg", "sandrofnfp");
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");
//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });

// test(`Test 06: Intern obj w empty school user name"`, () => {
//   const intern = new Intern("sandro", "botticelli", 25, "sandrobotticelli@fnpf.org", "");
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");
//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });

// test(`Test 07: create Intern obj w mismatched role"`, () => {
//   const intern = new Intern("sandro", "botticelli", 25, "sandrobotticelli@fnpf.org", "sandrofnfp");
//   intern.role="Employee" // Constructor returns "Intern"
//   expect(intern.firstName).toEqual(expect.any(String));
//   expect(intern.firstName).not.toEqual("");
//   expect(intern.lastName).toEqual(expect.any(String))
//   expect(intern.lastName).not.toEqual("");
//   expect(intern.id).toEqual(expect.any(Number));
//   expect(intern.id).toBeGreaterThan(0);
//   expect(intern.id).toBeLessThan(maxEmployees);
//   expect(intern.email).toEqual(expect.any(String));
//   expect(intern.email).toMatch('@');
//   expect(intern.email).toMatch('.');
//   expect(intern.school).toEqual(expect.any(String));
//   expect(intern.school).not.toEqual("");
//   expect(intern.role).toMatch("Intern");
// });
