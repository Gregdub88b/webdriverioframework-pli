const eBayWatchSearchPage = require('../pageobjects/eBayWatchesSearch.page');

describe('search watches page',() => {
before(() => {
    eBayWatchSearchPage.open();
    eBayWatchSearchPage.fashionLink.moveTo();
    eBayWatchSearchPage.watchesLink.waitForClickable({ timeout: 3000 });
    eBayWatchSearchPage.watchesLink.click();
    //console.log(eBayWatchSearchPage.getWatchesCategoryList());
})


    it('Should show watch banner',() => {
        
        
expect(eBayWatchSearchPage.promoBanner).toBeDisplayed();
    });

    it('verifying banner title', () => {
      
        expect(eBayWatchSearchPage.infoTitle).toHaveText('Up to 30% off Rolex');
    });
    it('link should be present on banner and it should be clickable', () => {
      ;
        expect(eBayWatchSearchPage.shopButton).toHaveLinkContaining('rolex');
        expect(eBayWatchSearchPage.shopButton).toBeClickable();
    });

    it('click on shopbutton and verify url', () => {
       
        eBayWatchSearchPage.shopButton.click();
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720');
    });
    
});