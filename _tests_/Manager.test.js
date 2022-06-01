const Manager = require('../lib/Manager');

it('should create a manager object', () => {
    const manager = new Manager('', '', '');

    expect(manager.name).toEqual('');
    expect(manager.id).toEqual('');
    expect(manager.email).toEqual('');
})

it('should get the managers office number', () => {
    const manager = new Manager('', '', '');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})