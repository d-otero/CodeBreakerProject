let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '');
    setHiddenFields();
    if (!validateInput(input.value)) {
      return;
    }
    attempt.value++;
  }
    // WIN, LOSE, TRY AGAIN
    if (getResults(input.value)) {
      setMessage('You Win! :)');
    } else if (attempt.value >= 10) {
      setMessage('You Lose! :(');
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again.");
    }
}

function getResults(input) {
  let html = '<span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) == answer.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>';
    } else if (answer.value.indexOf(i) > -1) {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      html += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
      html += '<div></div>';
      document.getElementById('results').innerHTML += html;
      var countResults += 0;
      if (input === answer.value) {
        countResults++;
      }
      return false;
}
//END OF getResults
  function setHiddenFields() {
  answer.value =  Math.floor(Math.random) * 10000).toString();
  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
  attempt.value = 0
}
//END OF setHiddenFields function
  function setMessage(message) {
  document.getElementById('message').innerHTML = message;
  }
//END OF setMessage function
   function validateInput(input) {
    if (input.length !== 4) {
      setMessage("Guesses must be exactly 4 characters long.");
      return false;
    }
    return true;
  }

function showAnswer (success) {
  let code = document.getElementById('code');
  if (success) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
}
//END OF showAnswer
function showReplay () {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementsByClassName('replay-div').style.display = 'block';
}
