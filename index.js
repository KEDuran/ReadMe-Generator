// Const question variable that will house all the questions.
const questions = [
	// Question for project title section
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
		// validate inquirer method to make sure question is answered.
		validate: function (value) {
			if (value != "") {
				return true;
			} else {
				return "Please enter a response.";
			}
		},
	},
	// Question for Project Description section
	{
		type: "input",
		name: "description",
		message: "Please enter a brief description of your project.",
		// validate inquirer method to make sure question is answered.
		validate: function (value) {
			if (value != "") {
				return true;
			} else {
				return "Please enter a description of your project.";
			}
		},
	},
	// Question for Installation section
	{
		type: "input",
		name: "installation",
		message:
			"What commands did you use to install NPM modules for the program?",
		// validate inquirer method to make sure question is answered.
		validate: function (value) {
			if (value != "") {
				return true;
			} else {
				return "Please enter any major commands you used to install NPM modules.";
			}
		},
	},
	// Question for Usage Section
	{
		type: "input",
		name: "usage",
		message: "Please describe how we can use this program.",
		// validate inquirer method to make sure question is answered.
		validate: function (value) {
			if (value != "") {
				return true;
			} else {
				return "Please enter a response to this question.";
			}
		},
	},
	// Question for License section
	{
		type: "input",
		name: "license",
		message: "Please enter any license information for this project.",
		// validate inquirer method to make sure question is answered.
		validate: function (value) {
			if (value != "") {
				return true;
			} else {
				return "Please enter appropriate license information.";
			}
		},
	},
	// Question for Contributing section
	{
		type: "input",
		name: "contributing",
		message: "How can a someone contribute to your project?",
	},
	// Question for Tests section
	{
		type: "input",
		name: "tests",
		message:
			"Please enter any testing protocols that you used for your project?",
	},
	// Profile pic question for Contact section
	{
		type: "input",
		name: "profilePic",
		message: "Please upload your GitHub profile picture?",
	},
	// Username question for Contact section
	{
		type: "input",
		name: "userName",
		message: "What is your GitHub username?",
	},
	// User email question for Contact section
	{
		type: "input",
		name: "userEmail",
		message: "What is your GitHub email?",
	},
];
// Const fs variable that will allow us to use fs modules
const fs = require("fs");
// Const inquirer variable that will allow us to use the NPM inquirer module
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// This function is used to generate the ReadMe titles and content.
function writeToFile(fileName, data) {
	let readMeString = generateMarkdown(data);
	fs.writeFile(fileName, readMeString, function (err) {
		if (err) {
			return console.log(err);
		}
	});
}

// This function is used to trigger question prompts, store answer data, and calls writeToFile() function.
function init() {
	// inquirer.prompt method will ask the questions and store answers in JSON object
	inquirer.prompt(questions).then((data) => {
		console.log(JSON.stringify(data, null, " "));
		writeToFile("./sample/readme.md", data);
	});
}

init();
