module.exports = {
    url: 'https://pendle.finance/',
    elements: {}, 
    commands: [{
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