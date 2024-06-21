const {By} = require('selenium-webdriver');
const BasePage = require('../POM/BasePage');

class ElementFunctionality extends BasePage{
    constructor(driver){
        super(driver);
    }

    async firstTest(url){
        await this.driver.get(url);
        await this.navigateToElementLInk();
        await this.downloadFile();
        //const fileInputSelector = By.id('uploadFile');
        //const filePath = 'C:\\Users\\LENOVO\\OneDrive - TestSolutions GmbH\\Desktop\\Emmanuel.jpg';
        await this.uploadFile(fileInputSelector, filePath);
    }
}

module.exports = ElementFunctionality;

