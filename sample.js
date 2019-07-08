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
    await driver.get('https://tenki.jp/forecast/6/31/6310/28100/?selected=tenki&date=0');

    // TODO 何らかの情報をスクレイピングしてstdoutに出力する
    const temp = By.xpath('//section[@class="today-weather"]//dd[@class="high-temp temp"]/span[@class="value"]')
    console.log(temp);

    //driver.quit();
}

sample();
