
module.exports = (function() {
  const waitForTextChange = (elm, text, timeout) => {
    browser.waitUntil(
      function () {
        return elm.getText() === text;
      },
      { timeout }
    );
  };
  

})();