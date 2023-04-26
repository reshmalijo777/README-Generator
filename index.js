// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown= require("./utils/generateMarkdown")

const questions = [

    {
        type:'input',
        message:'what is the title of your project?',
        name:'title',
    },
    {
       type:'input',
       message:'Give a description about your project',
       name:'description',
    },
    {
        type:'input',
        message:'what is the usage of this application?',
        name:'usage',
    },
    {
        type:'Installation',
        message:'How do you install your application?',
        name:'installation',
    } ,
    {
        type:'List',
        message:'What type of license you use for your project',
        name:'license',
        choices:['MIT','Apache','ISC'],
    },
    {
        type:'input',
        message:'who are the contributers of this project?',
        name:'contributers',

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
    



    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
