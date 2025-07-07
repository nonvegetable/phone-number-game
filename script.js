var startButton = document.getElementById('startBtn');
var submitButton = document.getElementById('submitBtn');
var clearButton = document.getElementById('clearBtn');
var phoneInput = document.getElementById('phoneInput');
var digitInput = document.getElementById('digitInput');
var feedback = document.getElementById('feedback');
var gameSection = document.getElementById('game-section');
var startSection = document.getElementById('start-section');
var stepCount = document.getElementById('step-count');

var phoneDigits = [];
var currentStep = 1;

startButton.addEventListener('click', function () {
  var number = phoneInput.value.trim();

  if (!/^\d+$/.test(number)) {
    feedback.innerText = "Please enter only digits!";
    return;
  }

  phoneDigits = Array.from(number).map(Number);
  currentStep = 1;

  startSection.style.display = 'none';
  gameSection.style.display = 'block';
  stepCount.innerText = currentStep;
  digitInput.value = "";
  feedback.innerText = "";
});

// Allow typing with keyboard and submitting with Enter
digitInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    submitButton.click();
  }
});

// Dialer buttons add to input
document.querySelectorAll('.digit-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (digitInput.value.length < phoneDigits.length) {
      digitInput.value += btn.innerText;
    }
  });
});

clearButton.addEventListener('click', function () {
  digitInput.value = "";
  feedback.innerText = "";
});

submitButton.addEventListener('click', function () {
  var guessDigits = Array.from(digitInput.value).map(Number);

  if (guessDigits.length !== currentStep) {
    feedback.innerText = "Please enter exactly " + currentStep + " digit(s).";
    digitInput.value = "";
    return;
  }

  var isCorrect = true;
  for (var i = 0; i < currentStep; i++) {
    if (guessDigits[i] !== phoneDigits[i]) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    if (currentStep === phoneDigits.length) {
      feedback.innerText = "🎉 You have successfully learned the full number!";
    } else {
      currentStep++;
      stepCount.innerText = currentStep;
      digitInput.value = "";
      feedback.innerText = "Correct! Now enter " + currentStep + " digit(s).";
    }
  } else {
    feedback.innerText = "Incorrect! Start from the beginning.";
    currentStep = 1;
    stepCount.innerText = currentStep;
    digitInput.value = "";
  }
});
