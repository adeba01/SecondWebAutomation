const {Builder, By, until} = require('selenium-webdriver');
const {Actions} = require('selenium-webdriver')

class BasePage {

    constructor(driver){
        this.driver = driver;
    
        this.BookStoreApplicationLink = By.xpath('/html/body/div[2]/div/div/div[2]/div/div[6]/div/div[2]');
        this.ElementLink = By.xpath('/html/body/div[2]/div/div/div[2]/div/div[1]/div/div[3]/h5');
        this.UploadAndDownLink = By.xpath('//*[@id="item-7"]');
        this.DownLoadLink = By.xpath('//*[@id="downloadButton"]');
        this.FileInputSelectoLink = By.id('uploadFile');
        this.ButtonTryLink = By.xpath('//*[@id="item-4"]');
        this.DoubleClickLink = By.id('doubleClickBtn');
        //this.adevertCloseButton = By.css('html.i-amphtml-inabox body.amp-animate div#abgc.abgc.abgf.pen form#mta.sh.ss.jm.amp-animate.abgf.pen label#cbb.cbb.pea svg path');
    }
    //async closeAdvert(){
       // try{
       //     const advert = await this.driver.wait(until.elementLocated(this.advertCloseButton), 50000);
       //     if (advert){
      //          await advert.click();
      //      }
      //  }catch (error){
      //      console.log('advert not found or not closed:', error);
     //   }
   // }

    async scrollToElement(element){
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    async navigateToBookStoreApplication(){
       // await this.closeAdvert();
        
        const bookstoreElement = await this.driver.findElement(this.BookStoreApplicationLink);
        await this.scrollToElement(bookstoreElement);
        await bookstoreElement.click();
    }

    async navigateToElementLInk(){
        const elementLnk = await this.driver.findElement(this.ElementLink);
        await this.scrollToElement(elementLnk);
        await elementLnk.click();
        const upldAndDwnLnk = await this.driver.findElement(this.UploadAndDownLink);
        await this.scrollToElement(upldAndDwnLnk);
        await upldAndDwnLnk.click();
       // const uploadBttn = await this.driver.findElement(this.UploadButton);
       // await uploadBttn.click();
        
    }
        async uploadFile(fileInputSelector, filePath){
        const fileInputElement = await this.driver.wait(until.elementLocated(fileInputSelector), 10000);
        await fileInputElement.sendKeys(filePath);
    }
    async downloadFile(){
        const dwnld = await this.driver.findElement(this.DownLoadLink);
        await dwnld.click();
    }
    async tapOnButtonLink(element){
        const elementLnk1 = await this.driver.findElement(this.ElementLink);
        await this.scrollToElement(elementLnk1);
        await elementLnk1.click();
        const bttn = await this.driver.findElement(this.ButtonTryLink);
        await bttn.click();
        const elementlnk2 = await this.driver.findElement(this.DoubleClickLink);
       // const actions = this.driver.actions({bridge: true});
        await elementlnk2.click();
    
        
    }
}

module.exports = BasePage;