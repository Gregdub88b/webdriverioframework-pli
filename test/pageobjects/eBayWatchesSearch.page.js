const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class eBayWatchSearchPage extends Page {
    /**
     * define selectors using getter methods
     */
     get promoBanner () { return $('section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70') }
     get infoTitle () { return $('.\_FCF2BD5C1B05 .b-promobanner__info-title') }
     get shopButton () { return $('.\_FCF2BD5C1B05 .b-promobanner__info-btn') }
     get watchesCategoryList () { return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li') }
     get fashionLink(){ return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0]}
     get watchesLink(){ return $('.hl-cat-nav__sub-cat-col a[href*="Watches-Parts"]')}
     
     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
      open(){
        browser.url('/');
    }

    getWatchesCategoryList(){
        const watchesList = [];
        return this.watchesCategoryList.map((element) =>
        watchesList.push(element.getText())
        )
        return watchesList;
    }
}

module.exports = new eBayWatchSearchPage();
