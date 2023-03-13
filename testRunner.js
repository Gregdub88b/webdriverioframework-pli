
describe('Running all test', () => {

    const test_runner = browser.config.data;
    // Here we loop through all test cases and run the ones set to run_mode = yes
    test_runner[0].forEach(function (data) {
        // Show which test case is currently running
        console.log('*************************************************************************');
        console.log('Test case is ' + data.test_case_name + ' and run mode is ' + data.run_mode);
        console.log('*************************************************************************');

        if ((data.run_mode.toLowerCase() === 'yes')) {
            //All spec files need to be named the same in spec folder as is in the excel file test_case_name
            require('./test/specs/' + data.test_case_name);
        }
    })
});