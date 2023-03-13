// Imports
const eBayWatchSearchPage = require('../pageobjects/eBayWatchesSearch.page');
const excel_reader = require('../../utilities/XLReader');

describe('search watches page', () => {

    before(() => {
        eBayWatchSearchPage.open();
        eBayWatchSearchPage.fashionLink.moveTo();
        eBayWatchSearchPage.watchesLink.waitForClickable({timeout: 3000});
        eBayWatchSearchPage.watchesLink.click();

    })

    afterEach(function () {

        if (this.currentTest.state == 'failed') {

            browser.takeScreenshot();
        }


    });


    const excel_data = browser.config.data;

    excel_data[0].forEach(function (data) {
        if (data.test_case_name === 'eBayWatchesSearch') {
            excel_data[3].forEach(function (data) {
                it('Search watch and verify new url', () => {

                    expect(eBayWatchSearchPage.promoBanner).toBeDisplayed();
                    expect(eBayWatchSearchPage.infoTitle).toHaveText(data.infoTitle);

                    expect(eBayWatchSearchPage.shopButton).toHaveLinkContaining(data.expectedLinkText);
                    expect(eBayWatchSearchPage.shopButton).toBeClickable();

                    eBayWatchSearchPage.shopButton.click();
                    expect(browser).toHaveUrl(data.expectedUrl);

                });
            })
        }
    })


});