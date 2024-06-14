const {Builder, By, until} = require('selenium-webdriver');
const BasePage = require('../POM/BasePage');

class ButtonFunctionalityCheck extends BasePage{
    constructor(driver){
        super(driver);
    }

    async secondtest(){
        await this.open('https://demoqa.com/');
        //const targetedElement = await this.driver.wait(until.elementLocated(DoubleClickLink), 10000);
        await this.tapOnButtonLink();
    }
    
}
(async function runTheAboveTest(){
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.manage().window().fullscreen();
    try{
        let TestScript = new ButtonFunctionalityCheck(driver);
        await TestScript.secondtest();
    }finally{
        await driver.manage().setTimeouts({implicit: 60000})
    }
})();