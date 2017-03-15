let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if ('answer' && 'attempt' == '');
    setHiddenFields();
    if (validateInput(!input.value)) {
      return false;
    } else {
      attempt++;
    }
}

//implement new functions here
  function setHiddenFields() {
  var answer =  Math.floor(Math.random) * 9999);
  answer.toString();
  while (answer.length < 4) {
    "00" + answer;
  attempt += 0;
  }
};
//END OF setHiddenFields function
  function setMessage() {
    var message = document.getElementById('message').innerHTML;
  };
//END OF setMessage function
   function validateInput(setHiddenFields()) {
    if (setHiddenFields.length == 4) {
      return true;
    } else {
      setMessage("Guesses must be exactly 4 characters long.");
    }
    return false;
  };
  //END OF validateInput function
  function getResults() {}
