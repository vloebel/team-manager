const Manager = require('../lib/manager.js');

// ToDo: algorithm for employee ID generation
const maxEmployees = 100

// to run: "npm test manager"
// manager object is expected: (firstName, lastName, id, email, school)
// Test 00 builds an object with the expected input and should succeed
// Remaining tests each pass in one invalid parameter and should fail

test('Test 00: create manager obj with expected values', () => {
  const manager = new Manager ("Julia", "Green", 25, "JuliaGreen@fnpf.org", "117");
  expect(manager.firstName).toEqual(expect.any(String));
  expect(manager.firstName).not.toEqual("");

  expect(manager.lastName).toEqual(expect.any(String))
  expect(manager.lastName).not.toEqual("");

  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.id).toBeGreaterThan(0);
  expect(manager.id).toBeLessThan(maxEmployees);

  expect(manager.email).toMatch('@');
  expect(manager.email).toMatch('.');

  expect(manager.officeNumber).toEqual(expect.any(String));
  expect(manager.officeNumber).not.toEqual("");
  
  expect(manager.role).toMatch("Manager");
});

// // ***********************************************************
// // *****  THESE VALIDATE THE TEST CONDITIONS *****************
// // *******  They are for development only  *******************
// // ***********************************************************

// test('Test 01: create manager obj with empty firstName', () => {
//   const manager = new Manager("", "Green", 25, "JuliaGreen@fnpf.org", "117");
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });

// test('Test 02: create manager obj with empty lastName', () => {
//   const manager = new Manager("Julia", "", 25, "JuliaGreen@fnpf.org", "117");
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });

// test('Test 03: create manager obj with id out of range', () => {
//   const manager = new Manager("Julia", "Green", maxEmployees+1 , "JuliaGreen@fnpf.org", "117");
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });

// test(`Test 04: manager obj missing '@' in email`, () => {
//   const manager = new Manager("Julia", "Green", 25, "JuliaGreenfnpf.org", "117");
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });

// test(`Test 05: manager obj missing '.' in email`, () => {
//   const manager = new Manager("Julia", "Green", 25, "JuliaGreen@fnpforg", "117");
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });

// test(`Test 06: manager obj w empty office number"`, () => {
//   const manager = new Manager("Julia", "Green", 25, "JuliaGreen@fnpf.org", "");
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });

// test(`Test 07: create manager obj w mismatched role"`, () => {
//   const manager = new Manager("Julia", "Green", 25, "JuliaGreen@fnpf.org", "117");
//   manager.role="Employee" // Constructor returns "manager"
//   expect(manager.firstName).toEqual(expect.any(String));
//   expect(manager.firstName).not.toEqual("");
//   expect(manager.lastName).toEqual(expect.any(String))
//   expect(manager.lastName).not.toEqual("");
//   expect(manager.id).toEqual(expect.any(Number));
//   expect(manager.id).toBeGreaterThan(0);
//   expect(manager.id).toBeLessThan(maxEmployees);
//   expect(manager.email).toEqual(expect.any(String));
//   expect(manager.email).toMatch('@');
//   expect(manager.email).toMatch('.');
//   expect(manager.officeNumber).toEqual(expect.any(String));
//   expect(manager.officeNumber).not.toEqual("");
//   expect(manager.role).toMatch("Manager");
// });
