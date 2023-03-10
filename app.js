const fs = require('fs');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


//Create automation environment
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

async function runScript(url, script) {

    try {
        await driver.wait(driver.get(url));
        //read script file and convert to string
        const buffer = fs.readFileSync(script);
        const fileContent = buffer.toString();

        //RESULT IS THE RETURN VALUE OF WHATEVER FUNCTION RUNS
        let result = await driver.executeScript(fileContent);
        return result;
    } catch (error) {
        console.log("ERROR AT URL: " + url);
    }
}


async function editAllTexts(urlArray) {
    let completedArticles = [];
    let uncompletedArticles = [];

    for (const articleURL of urlArray) {
        //editText.js SCRIPT RETURNS OBJECT WITH KEYS 
        //articleURL: string
        //edited: boolean
        //originalText: string,
        //newText: string(if edited)
        let articleComplete = await runScript(articleURL, "editText.js");

        //IF ARTICLE COMES BACK WITH NOTHING - LOG THE URL AND EDITED FALSE
        if (articleComplete === undefined) {
            articleComplete = {
                "articleURL": articleURL,
                "edited": false
            };
        }

        //OBJECT TO STRING IN ORDER TO WRITE TO FILE
        //LOG ALL INFO ON EACH ARTICLE BEFORE SAVING CHANGES
        let toWrite = `${JSON.stringify(articleComplete)},\n\n`;
        fs.appendFile('file.json', toWrite, err => {
            if (err) {
                console.error(err);
            }
        });

        if (articleComplete.edited === true) {

            //!PRESS SUBMIT BUTTON DO NOT UNCOMMENT UNTIL READY 
            let submit = await driver.wait(until.elementLocated(By.name('ok')), 5000);
            await submit.click();
            completedArticles.push(articleURL);

        } else {
            uncompletedArticles.push(articleURL);
        }
    }

    fs.appendFile('uncompleted.log', `${uncompletedArticles.toString()}\n`, err => {
        if (err) {
            console.error(err);
        }
    });

    console.log("Articles edited successfully: " + completedArticles.length + '\n' + "Articles failed: " + uncompletedArticles.length);
    return uncompletedArticles;
}


async function run() {

    // LOGIN
    let loggedIn = await runScript("https://austria-forum.org/Login.jsp?redirect=Austria-Forum", "login.js");
    console.log(loggedIn);
    // GET LINKS TO EDIT
    let urlList = await runScript("https://austria-forum.org/af/Geography/About/Main_Ideas/Current_List_of_Stories", "getURLs.js")
    // console.log(urlList);
    // EDIT LINKS
    //! DO NOT UNCOMMENT UNTIL READY TO RUN
    // let results = await editAllTexts(urlList);

}
run();