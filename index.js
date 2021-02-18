//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const fs = require('fs');
const inquirer = require('inquirer');

function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your title?',
            name: 'title',
        },
        {
            type: 'input',
            message: ' Give brife description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Give installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide usage information:?',
            name: 'usage',
        },
        {
            type: 'input',
            message: ' Tell more about contribution guidelines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Provide test instructions?',
            name: 'test',
        }

    ]).then(function (response) {
        var data =`# Title
  ${response.title}
# Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ Contribution. ](#contribution)  
5. [ Test. ](#test)  

## Description 
  ${response.description}
## Installation
  ${response.installation}
## Usage 
  ${response.usage}
## Contribution
  ${response.contribution}
## Test
  ${response.test}`
        return fs.writeFile('readme-template.md', data, (err) => err ? console.error(err) : console.log('Success!'));
    }
    )
}
init();
