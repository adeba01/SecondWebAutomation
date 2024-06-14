const {Builder} = require('selenium-webdriver');
const config = require('./Config');

(async function testRunner(){
    let driver = await new Builder().forBrowser('firefox').build();
    try{
        for(const testCase of config.testCases){
            const PageObject = require(testCase.pageObject);
            const page = new PageObject(driver);
            await page[testCase.method](testCase.url);
        }
    } catch(error){
        console.error('An error occured:', error);
    } finally{
        await driver.manage().setTimeouts({implicit: 60000});
    }
})();