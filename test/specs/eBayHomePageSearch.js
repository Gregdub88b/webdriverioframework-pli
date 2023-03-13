// Imports
const eBayHomePage = require('../pageobjects/eBayHomePageSearch.page');
const allureReporter = require('../../node_modules/@wdio/allure-reporter').default;
const {default: waitForTextChange} = require('../../utilities/helper');
const excel_reader = require('../../utilities/XLReader');

describe('Ebay product search', () => {
    afterEach(function () {

        if (this.currentTest.state == 'failed') {

            browser.takeScreenshot();
        }

    });

    const excel_data = browser.config.data;


    excel_data[0].forEach(function (data) {
            if (data.test_case_name === 'eBayHomePageSearch') {

                excel_data[1].forEach(function (data) {

                    it('Open the url and verify the title', () => {
                        eBayHomePage.open();
                        expect(browser).toHaveTitle(data.homeTitle);

                        eBayHomePage.searchInput.addValue(data.searchText);
                        eBayHomePage.searchBtn.click();

                        eBayHomePage.searchInput.waitForEnabled({timeout: 2000});
                        expect(eBayHomePage.searchInput).toHaveValue(data.expectedValue, {ignoreCase: true});

                        expect(browser).toHaveTitle(data.laptopTitle);
                        allureReporter.addFeature('Search Category')
                        expect(eBayHomePage.category).toHaveText(data.expectedText);

                    });

                })
            }
        }
    )
});