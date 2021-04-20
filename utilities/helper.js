

function waitForTextChange(elm, text, timeout) {
  browser.waitUntil(
    function () {
      console.log('*********Inside custome function**********');
      return elm.getText() === text;
    },
    { timeout }
  );
}

export default waitForTextChange;