const Engineer = require('../lib/Engineer.js');

// ToDo: algorithm for employee ID generation
const maxEmployees = 100

// to run: "npm test Engineer"
// Engineer object is expected: (firstName, lastName, id, email, github)
// Test 00 builds an object with the expected input and should succeed
// Remaining tests each pass in one invalid parameter and should fail
// They are basically to test the tests and will be commented out for development

test('Test 00: create Engineer obj with expected values', () => {
  const eng = new Engineer ("Veronica", "Wu", 25, "veronicawu@fnpf.org", "veronicafnfp");
  expect(eng.firstName).toEqual(expect.any(String));
  expect(eng.firstName).not.toEqual("");

  expect(eng.lastName).toEqual(expect.any(String))
  expect(eng.lastName).not.toEqual("");

  expect(eng.id).toEqual(expect.any(Number));
  expect(eng.id).toBeGreaterThan(0);
  expect(eng.id).toBeLessThan(maxEmployees);

  expect(eng.email).toMatch('@');
  expect(eng.email).toMatch('.');

  expect(eng.github).toEqual(expect.any(String));
  expect(eng.github).not.toEqual("");
  expect(eng.role).toMatch("Engineer");
});

// ***********************************************************
// *****  THESE VALIDATE THE TEST CONDITIONS *****************
// *******  They are for development only  *******************
// ***********************************************************

// test('Test 01: create Engineer obj with empty firstName', () => {
//   const eng = new Engineer("", "Wu", 25, "veronicawu@fnpf.org", "veronicafnfp");
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");

//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });

// test('Test 02: create Engineer obj with empty lastName', () => {
//   const eng = new Engineer("Veronica", "", 25, "veronicawu@fnpf.org", "veronicafnfp");
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");
//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });

// test('Test 03: create Engineer obj with id out of range', () => {
//   const eng = new Engineer("Veronica", "Wu", maxEmployees+1 , "veronicawu@fnpf.org", "veronicafnfp");
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");
//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });

// test(`Test 04: Engineer obj missing '@' in email`, () => {
//   const eng = new Engineer("Veronica", "Wu", 25, "veronicawufnpf.org", "veronicafnfp");
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");
//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });

// test(`Test 05: Engineer obj missing '.' in email`, () => {
//   const eng = new Engineer("Veronica", "Wu", 25, "veronicawu@fnpforg", "veronicafnfp");
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");
//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });

// test(`Test 06: Engineer obj w empty github user name"`, () => {
//   const eng = new Engineer("Veronica", "Wu", 25, "veronicawu@fnpf.org", "");
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");
//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });

// test(`Test 07: create Engineer obj w mismatched role"`, () => {
//   const eng = new Engineer("Veronica", "Wu", 25, "veronicawu@fnpf.org", "veronicafnfp");
//   eng.role="Employee" // Constructor returns "Engineer"
//   expect(eng.firstName).toEqual(expect.any(String));
//   expect(eng.firstName).not.toEqual("");
//   expect(eng.lastName).toEqual(expect.any(String))
//   expect(eng.lastName).not.toEqual("");
//   expect(eng.id).toEqual(expect.any(Number));
//   expect(eng.id).toBeGreaterThan(0);
//   expect(eng.id).toBeLessThan(maxEmployees);
//   expect(eng.email).toEqual(expect.any(String));
//   expect(eng.email).toMatch('@');
//   expect(eng.email).toMatch('.');
//   expect(eng.github).toEqual(expect.any(String));
//   expect(eng.github).not.toEqual("");
//   expect(eng.role).toMatch("Engineer");
// });
