//homepage 
describe('Test Suite 1', function() {
    before(function(browser) {
        this.homepage = browser.page.pendlefinance();
        //browser.switchTab(0);
        this.homepage.resizeWindow(1000, 1200).navigate();
        browser.saveScreenshot('tests_output/metamaskerror.png')
    });

    after(browser => browser.end());
});