const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class eBayHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchInput () { return $('#gh-ac') }
    get searchBtn () { return $('#gh-btn') }
    get category () { return $('#gh-cat option:nth-child(1)') }

    open(){
        browser.url('/');
    }

    
}

module.exports = new eBayHomePage();
