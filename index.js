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
            message: 'Provide brife description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide usage information:?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Tell more about contribution guidelines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Provide test instructions?',
            name: 'test',
        },
        {
          type: 'list',
          message: 'Select your license type?',
          choices: ['ISC', 'MIT', 'IPA', 'NTP'],
          name: 'license',
        },
        {
          type: 'input',
          message: 'Enter your GitHub username?',
          name: 'gitHub',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Contect me with additional questions on my email?',
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
6. [ license. ](#license)
7. [ gitHub. ](#gitHub)
8. [ email. ](#email) 


## Description 
  ${response.description}
## Installation
  ${response.installation}
## Usage 
  ${response.usage}
## Contribution
  ${response.contribution}
## Test
  ${response.test}
## license
  ${response.license}
## gitHub
https://github.com/${response.gitHub}
## email
  ${response.email}`
        return fs.writeFile('readme-template.md', data, (err) => err ? console.error(err) : console.log('Success!'));
    }
    )
}
init();
