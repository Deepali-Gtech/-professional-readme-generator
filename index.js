const fs = require('fs');
const inquirer = require('inquirer');
const licenses = { 
  "ISC": "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",  
  "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"  ,
  "Apache": "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  "GNU GPL v3": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
};

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
          choices: ['ISC', 'MIT', 'Apache', 'GNU GPL v3'],
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
        var data =` ## License
${licenses[response.license]}
# Title
  ${response.title}
# Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ Contribution. ](#contribution)  
5. [ Test. ](#test)
6. [ License. ](#license)
7. [ GitHub. ](#gitHub)
8. [ Email. ](#email) 


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

## GitHub
https://github.com/${response.gitHub}
## Email
  ${response.email}`
        return fs.writeFile('readme-template.md', data, (err) => err ? console.error(err) : console.log('Success!'));
    }
    )
}
init();
