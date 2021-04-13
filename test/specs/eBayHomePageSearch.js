
const resources = require('../../resources/index');
const eBayHomePage = require('../pageobjects/eBayHomePageSearch.page');
const utilities = require('../../utilities/helper');

const allureReporter = require('../../node_modules/@wdio/allure-reporter').default
//import { waitForTextChange } from '../utilities/helper.js';
describe('Ebay product search',() => {
   
    it('Open the url and verify the title', () =>{
        eBayHomePage.open();
        //browser.url('https://www.ebay.com/');
        expect(browser).toHaveTitle(resources.homeTitle);
        //expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay'
       // );
    });

    it('Search for prodsuct and verify product search value',() =>{
        
        eBayHomePage.searchInput.addValue('Laptop');
        eBayHomePage.searchBtn.click();
        eBayHomePage.searchInput.waitForEnabled({ timeout :2000 });
    
        expect(eBayHomePage.searchInput).toHaveValue('LAPTOP', { ignoreCase: true });
        
      

    });

    it('navigate to new page and verify titile',() =>{
        expect(browser).toHaveTitle(resources.laptopTitle);
    });
it('Should update search category',() =>{
  
    //browser.waitAndClick(eBayHomePage.category);
   //browser.waitForTextChange(eBayHomePage.category,'PC Laptops & Netbooks',2000);
   
    //const category = $('#gh-cat option:nth-child(1)');
    
    allureReporter.addFeature('Search Category')
    expect(eBayHomePage.category).toHaveText('SATYA Laptops & Netbooks');
});
    
});