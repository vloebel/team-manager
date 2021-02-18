const Employee = require('../lib/Employee.js');
const maxEmployees = 100

test('01: create Employee obj with expected values', () => {
  const emp1 = new Employee("Bernie", "Woodson", 25, 'berniewoodson@fnpf.org');
  expect(emp1.lastName).toEqual(expect.any(String))
  expect(emp1.firstName).toEqual(expect.any(String));
  expect(emp1.id).toEqual(expect.any(Number));
  expect(emp1.id).toBeLessThan(maxEmployees);
  expect(emp1.email).toMatch('@');
});

test('02: create Employee obj with empty firstName', () => {
  const emp1 = new Employee("", "Woodson", 25, 'berniewoodson@fnpf.org');
  expect(emp1.lastName).toEqual(expect.any(String))
  expect(emp1.firstName).toEqual(expect.any(String));
  expect(emp1.id).toEqual(expect.any(Number));
  expect(emp1.id).toBeLessThan(maxEmployees);
  expect(emp1.email).toMatch('@');
  expect(emp1.role).tomatch("Employee");
});

test('03: create Employee obj with empty lastName', () => {
  const emp1 = new Employee("Bernie", "", 25, 'berniewoodson@fnpf.org');
  expect(emp1.lastName).toEqual(expect.any(String))
  expect(emp1.firstName).toEqual(expect.any(String));
  expect(emp1.id).toEqual(expect.any(Number));
  expect(emp1.id).toBeLessThan(maxEmployees);
  expect(emp1.email).toMatch('@');
  expect(emp1.role).tomatch("Employee");

});

test('04: create Employee obj with id out of range', () => {
  const emp1 = new Employee("Bernie", "Woodson", 100, 'berniewoodson@fnpf.org');
  expect(emp1.lastName).toEqual(expect.any(String))
  expect(emp1.firstName).toEqual(expect.any(String));
  expect(emp1.id).toEqual(expect.any(Number));
  expect(emp1.id).toBeLessThan(maxEmployees);
  expect(emp1.email).toMatch('@');
  expect(emp1.role).tomatch("Employee");

});

test(`05: create Employee obj missing '@' in email`, () => {
  const emp1 = new Employee("Bernie", "Woodson", 25, 'berniewoodson.fnpf.org');
  expect(emp1.lastName).toEqual(expect.any(String))
  expect(emp1.firstName).toEqual(expect.any(String));
  expect(emp1.id).toEqual(expect.any(Number));
  expect(emp1.id).toBeLessThan(maxEmployees);
  expect(emp1.email).toMatch('@');
  expect(emp1.role).tomatch("Employee");

});

test(`06: create Employee obj missing '.' in email`, () => {
  const emp1 = new Employee("Bernie", "Woodson", 25, 'berniewoodson@fnpforg');
  expect(emp1.lastName).toEqual(expect.any(String))
  expect(emp1.firstName).toEqual(expect.any(String));
  expect(emp1.id).toEqual(expect.any(Number));
  expect(emp1.id).toBeLessThan(maxEmployees);
  expect(emp1.email).toMatch('.');
  expect(emp1.role).tomatch("Employee");

});