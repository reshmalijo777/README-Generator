// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table Of Contents

  - [usage](#usage)
  - [Installation](#installation)
  - [license](#license)
  - [contributors](#contributors)
  - [Questions](#Questions)

  ## Usage
  ${data.usage}

  ## Installation

  To run this project we need ${data.installation}

  ## License

  - [${data.license}](https://opensource.org/license/mit/)

  ## Contributors

  ${data.contributors}

  ## Questions

  If you have any Questions, contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
