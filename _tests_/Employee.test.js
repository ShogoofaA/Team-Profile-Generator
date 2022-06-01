const Employee = require('../lib/Employee');

it('should create an employee object', () => {
    const employee = new Employee('', '', '');

    expect(employee.name).toEqual('');
    expect(employee.id).toEqual('');
    expect(employee.email).toEqual('');
})

it('should take in employees name', () => {
    const employee = new Employee('', '', '');

    expect(employee.getName()).toEqual(expect.any(String));
})

it('should take in employees id', () => {
    const employee = new Employee('', '', '');

    expect(employee.getId()).toEqual(expect.any(String));
})

it('should take in employees email', () => {
    const employee = new Employee('', '', '');

    expect(employee.getEmail()).toEqual(expect.any(String));
})
