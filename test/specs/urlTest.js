const eBayHomePage = require('../pageobjects/eBayHomePageSearch.page');


describe('Ebay Home Page title Validation', () => {

    afterEach(function () {

        if (this.currentTest.state == 'failed') {

            browser.takeScreenshot();

        }

    });


    it('Open the url and verify the title', () => {

        eBayHomePage.open();

        const excel_data = browser.config.data;
        excel_data[0].forEach(() => {
            excel_data[1].forEach((data) => {
                expect(browser).toHaveTitle(data.homeTitle);
            });
        })
    });

});