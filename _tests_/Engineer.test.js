const Engineer = require('../lib/Engineer');

it('should create an engineer object', () => {
    const engineer = new Engineer('', '', '',);

    expect(engineer.name).toEqual('');
    expect(engineer.id).toEqual('');
    expect(engineer.email).toEqual('');
})

it('should get the engineers gitHub username', () => {
    const engineer = new Engineer('', '', '');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})