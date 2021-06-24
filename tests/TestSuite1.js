//homepage 
describe('Test Suite 1', function() {
    before(function(browser) {
        this.homepage = browser.page.pendlefinance();
        // browser.switchTab(0);
        this.homepage.resizeWindow(1000, 1200).navigate();
        browser.saveScreenshot('tests_output/metamaskerror.png')
    });

    test('New sign into MetaMask', (browser) => {
        //chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#initialize/welcome
        const metamask = browser.page.metamask();
        
        browser.switchTab(1)
        .saveScreenshot('tests_output/metamasktest.png')
        // get started
        metamask.goToNext('button')
        // I have a recovery phrase already
        .goToNext('@haveRecoveryPhrase')
        // no data reporting
        .goToNext('@noDataReporting')

        // enter details and submit
        .enterDetails()
        .submit()
        .waitForElementVisible('.end-of-flow')
        .assert.visible('.end-of-flow', 'end of metamask flow complete')
        .click('button')

        .saveScreenshot('tests_output/metamasksignedin.png')
        .switchTab(0)
    })

    test('Launch Pendle app', (browser) => {
        // select app from homepage
        this.homepage.launchApp()

        // at the connect wallet screen
        .closeSelectAWallet()
        .openSelectAWallet()
        .connectToMetamask()

        // on the app
        // 20 seconds timeout because transaction signing is manual still
        .waitForElementVisible('div > table', 20000)
        .assert.visible('div > table', 'pool table visible')
        .saveScreenshot('tests_output/pooltable.png')
    });

    after(browser => browser.end());
});