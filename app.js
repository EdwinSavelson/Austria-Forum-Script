const fs = require('fs');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const chrome = require("selenium-webdriver/chrome");

//Create automation environment
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('https://austria-forum.org/Login.jsp?redirect=Austria-Forum')


//read login.js file and convert to string
const buffer = fs.readFileSync("login.js");
const fileContent = buffer.toString();

// TODO: 
//-Login
//-Go to Geography Page(WAIT TIL PAGE LOADS?)
//-Run getURLs script in driver.executeScript();
//-Run editText script on each page of URL array
//





// console.log(fileContent);

//run functions
async function test() {

//TODO: CURRENTLY RUNS LOGIN FUNCTION- NEEDS TO RUN MULTIPLE FUNCTIONS

//RESULT IS THE RETURN VALUE OF WHATEVER FUNCTION RUNS
    let result  = await driver.executeScript(fileContent);
    console.log(result);
}

test();