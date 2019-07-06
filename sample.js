const webdriver = require('selenium-webdriver');
const { Builder, By, until} = webdriver;

async function sample() {
    //const capabilities = webdriver.Capabilities.chrome();
    //capabilities.set('chromeOptions', {});
    const capabilities = webdriver.Capabilities.chrome();
    capabilities.set('chromeOptions', {
        args: [
            //'--headless',
            //'--no-sandbox',
            //'--disable-gpu',
            //`--window-size=1980,1200`
            // other chrome options
        ]
    });
    const driver = await new Builder().withCapabilities(capabilities).build();
    await driver.get('http://google.com/');
    driver.quit();
}


//const driver = new Builder().build();
//const driver = await new Builder().build();
//driver.quit();

sample();
