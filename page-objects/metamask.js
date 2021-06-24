module.exports = {
    elements: {
        haveRecoveryPhrase: ':nth-child(1) > button',
        noDataReporting: '.btn-default.page-container__footer-button',
        submit: 'form > div.first-time-flow__checkbox-container > div',
        seedPhrase: '.first-time-flow__seedphrase > div >  input'
    }, 
    commands: [{
        goToNext(element) {
            return this
                .waitForElementVisible(element, time=20000)
                .click(element)
        },
        enterDetails() {
            return this
                .waitForElementVisible('@seedPhrase')
                .setValue('@seedPhrase', 'bulb nominee sadness trust mixed pretty bracket brave gate fetch virtual delay')
                .setValue('#password', 'Password1!')
                .setValue('#confirm-password', 'Password1!')
        },
        submit() {
            return this
                .click('@submit')
                .click('button')
        }
    }],
};