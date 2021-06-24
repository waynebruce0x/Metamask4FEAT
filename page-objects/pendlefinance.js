module.exports = {
    url: 'https://pendle.finance/',
    elements: {
        buttons : 'button.w-full',
        appButton : 'div > a:nth-child(1) > button',
        connectWalletButton : 'main > div > div > div > button',
        metamaskButton : 'section > ul > li:nth-child(1)',
        selectAWalletClose : '.bn-onboard-custom.svelte-rntogh > svg'
    }, 
    commands: [{
        launchApp() {
            return this
            .waitForElementVisible('@buttons')
            .click('@appButton')
        },
        closeSelectAWallet() {
            return this
            .waitForElementVisible('@selectAWalletClose')
            .assert.visible('@selectAWalletClose', 'connect wallet screen shown')
            .click('@selectAWalletClose')
        },
        openSelectAWallet() {
            return this
            .waitForElementVisible('@connectWalletButton')
            .click('@connectWalletButton')
        },
        connectToMetamask() {
            return this
            .waitForElementVisible('@metamaskButton')
            .click('@metamaskButton')
        },
        setHeader() {
            // set the context on the extension so the localStorage can be accessed
            const url = 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html'; // modHeader extension
            //this.navigate(url).waitForElementPresent('body', 20000);
        
            // setup ModHeader with header
            this.api.execute(`
              localStorage.setItem('profiles', JSON.stringify([{
                title: 'Selenium',
                hideComment: true,
                appendMode: '',
                headers: [
                  { enabled: true, name: 'Header_Name', value: 'Header_Value' },
                ],
                respHeaders: [],
                filters: [],
           }]))`);
        },
    }],
};