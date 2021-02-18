//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const fs = require('fs');
const inquirer = require('inquirer');

function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your title?',
            name: 'title',
        }

    ]).then(function (response) {
        var data = `# This is an <h1> tag
${response.title}
## This is an <h2> tag
###### This is an <h6> tag
        `
        return fs.writeFile('readme-template.md', data, (err) => err ? console.error(err) : console.log('Success!'));
    }
    )
}
init();
