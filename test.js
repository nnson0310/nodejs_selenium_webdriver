import webDriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromedriver from 'chromedriver';
import assert from 'assert';

let pageUrl = 'https://www.lambdatest.com';

(async () => {
    let driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
    await driver.get(pageUrl);
    let pageTitle = await driver.getTitle();
    await assert.equal(pageTitle, 'Most Powerful Cross Browser Testing Tool Online | LambdaTest');
    await driver.quit();
})();