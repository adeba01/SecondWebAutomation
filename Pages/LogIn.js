const {Builder} = require('selenium-webdriver');
const BasePage = require('../POM/BasePage');

class LoginFunctionlity extends BasePage{
    constructor(driver){
        super(driver);
    }

    async runTest(){
        await this.open('https://demoqa.com/');
        await this.navigateToBookStoreApplication();
    }
}

(async function Login_Test_case(){
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.manage().window().fullscreen();
    try{
        let testScript = new LoginFunctionlity(driver);
        await testScript.runTest();
    } finally{
        await driver.manage().setTimeouts({implicit: 60000})
    }

   // await driver.manage().setTimeouts({implicit: 60000});

})();