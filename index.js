const {writeFile, copyFile} = require('./utils/generate_team');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/template');

class Prompt {
    constructor(teamData) {
        this.employees = [];
    }

    promptUser() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the Team Managers name?',
                    name: 'name',
            
                },
                {
                    type: 'input',
                    message: 'What is the Team Managers ID?',
                    name: 'id',
            
                },
                {
                    type: 'input',
                    message: 'What is the Team Managers email?',
                    name: 'email',
            
                },
                {
                    type: 'input',
                    message: 'What is the Team Managers office number?',
                    name: 'officeNumber',
            
                },
            ])
            .then(({name, id, email, officeNumber}) => {
                this.employees.push(new Manager(name, id, email, officeNumber));
                this.getEngineer()
            })
    }
        getEngineer() {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the name of your Engineer?',
                    name: 'name',
            
                },
                {
                    type: 'input',
                    message: 'What is your Engineers ID number?',
                    name: 'id',
            
                },
                {
                    type: 'input',
                    message: 'What is the Engineers email?',
                    name: 'email',
            
                },
                {
                    type: 'input',
                    message: 'What is the Engineers GitHub Username?',
                    name: 'gitHub',
                },
        ])
        .then(({ name, id, email, gitHub}) => {
            this.employees.push(new Engineer(name, id, email, gitHub));
            this.getEmployee()
        })
    }
    getEmployee() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of your Employee?',
                name: 'name',
        
            },
            {
                type: 'input',
                message: 'What is your Employees ID number?',
                name: 'id',
        
            },
            {
                type: 'input',
                message: 'What is the Employees email?',
                name: 'email',
        
            },
        ])
        .then(({ name, id, email}) => {
            this.employees.push(new Employee(name, id, email));
            this.getIntern()
        })
    }
    getIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of your Intern?',
                name: 'name',
        
            },
            {
                type: 'input',
                message: 'What is your Interns ID number?',
                name: 'id',
        
            },
            {
                type: 'input',
                message: 'What is your Interns email?',
                name: 'email',
        
            },
            {
                type: 'input',
                message: 'What school did your Intern attend?',
                name: 'school',
            },
        ])
        .then(({ name, id, email, school}) => {
            this.employees.push(new Intern(name, id, email, school));
        })
        .then((teamData) => {
            return generatePage(this.employees)
        })
        .then(pageHTML => {
            return writeFile(pageHTML)
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse)
            return copyFile();
        })
        .then(copyFileReponse => {
            console.log(copyFileReponse);
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = new Prompt().promptUser();