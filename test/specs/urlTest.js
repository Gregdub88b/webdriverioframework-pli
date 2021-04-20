
const resources = require('../../resources/index');
const eBayHomePage = require('../pageobjects/eBayHomePageSearch.page');
const utilities = require('../../utilities/helper');

//const allureReporter = require('../../node_modules/@wdio/allure-reporter').default
//import { waitForTextChange } from '../utilities/helper.js';
describe('Ebay product search',() => {
  afterEach(function(){
        
    if (this.currentTest.state== 'failed') {
        
        browser.takeScreenshot();
    }
         // var name = 'ERROR-chrome-' + Date.now()
         
      
      
    });
    it('Open the url and verify the title', () =>{
        eBayHomePage.open();
        //browser.url('https://www.ebay.com/');
        expect(browser).toHaveTitle(resources.homeTitle);
        //expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay'
       // );
    });

    
    
});