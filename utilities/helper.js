

function waitForTextChange(elm, text, timeout) {
  browser.waitUntil(
    function () {
      console.log('*********Inside custom function**********');
      return elm.getText() === text;
    },
    { timeout }
  );
}

export default waitForTextChange;