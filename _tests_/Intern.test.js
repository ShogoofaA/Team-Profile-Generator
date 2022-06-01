const Intern = require('../lib/Intern');

it('should create an intern object', () => {
    const intern = new Intern('', '', '');

    expect(intern.name).toEqual('');
    expect(intern.id).toEqual('');
    expect(intern.email).toEqual('');
})

it('should get the interns attended school', () => {
    const intern = new Intern('', '', '');

    expect(intern.getSchool()).toEqual(expect.any(String));
})