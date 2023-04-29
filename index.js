const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown')

const questions = [

    {
        type:'input',
        message:'what is the title of your project?',
        name:'title',
    },
    {
       type:'input',
       message:'What is this project all about?',
       name:'description',
    },
    {
        type:'input',
        message:'what is the usage of this application?',
        name:'usage',
    },
    {
        type:'installation',
        message:'What are required to install for this application?',
        name:'installation',
    } ,
    {
        type:'list',
        message:'What type of license you use for your project',
        name:'license',
        choices:['MIT License','Apache License','ISC License'],
    },
    {
        type:'input',
        message:'who are the contributors of this project?',
        name:'contributors',

    },
    {
        type:'input',
        message:'what is your Github username?',
        name:'username',
    },
    {
        type:'input',
        message:'what is your email adress?',
        name:'email',
    },
    {
        type:'input',
        message:'what is the name of this file?',
        name:'fileName'
    }
     
];

function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, generateMarkdown(data), (err)=>
    err? console.log(err):console.log("README file is Generated")
    )}

function init() {
    inquirer
    .prompt (questions)
    .then ((response)=>{
        writeToFile(response.fileName, response);
    })
}
    init();