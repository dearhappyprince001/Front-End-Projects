const sentences = [
  "The quick brown fox jumps over the lazy dog.",

  "JavaScript is a versatile programming language.",

  "Typing fast requires practice and focus.",

  "Coding challenges improve problem-solving skills.",
]; //An array sentences stores multiple test sentences that will be randomly selected for the typing test.

//Declare Variables.

let timer; //timer: Stores the interval timer.

let timeLeft = 60; //timeLeft: Countdown timer starting at 60 seconds.

let correctChars = 0; //correctChars: Tracks the number of correctly typed characters.

let totalChars = 0; //totalChars: Tracks the total typed characters.

let sentence = ""; //sentence: Stores the current sentence the user needs to type.

let started = false; //started: Boolean flag to check if the test has started.

// Select HTML elements
const textDisplay = document.getElementById("text-display");
const inputBox = document.getElementById("input-box");
const timeLeftDisplay = document.getElementById("time-left");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

// Function to Get a Random Sentence

function getRandomSentence() {
  return sentences[Math.floor(Math.random() * sentences.length)]; //Math.random() generates a random number between 0 and 1.Math.floor() rounds it down to get a valid index in the array.
}

// function to Start or Restart Test
function startTest() {
  clearInterval(timer);
  timeLeft = 60;
  correctChars = 0;
  totalChars = 0;
  sentence = getRandomSentence();
  document.getElementById("text-display").textContent = sentence;
  document.getElementById("input-box").value = "";
  document.getElementById("time-left").textContent = timeLeft;
  document.getElementById("wpm").textContent = 0;
  document.getElementById("accuracy").textContent = "100";
  started = false;
}

// Event Listener for Typing
document.getElementById("input-box").addEventListener("input", function () {
  //start timer on first keystroke.
  if (!started) {
    started = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
      } else {
        clearInterval(timer);
        document.getElementById("input-box").disabled = true;
      }
    }, 1000);
  }

  //Calculate Correct and Total Characters
  const inputText = this.value; //inputText stores the user's typed text.
  totalChars = inputText.length; //totalChars updates with the length of the typed text.
  correctChars = 0; //correctChars is reset before checking the correct characters.

  // Count correct characters
  for (let i = 0; i < totalChars; i++) {
    if (inputText[i] === sentence[i]) {
      correctChars++;
    }
  }

  // Calculate WPM (avoid NaN when timeLeft is 60)
  const wpm = Math.round(correctChars / 5 / ((60 - timeLeft) / 60)); //correctChars / 5: Converts characters into words (assuming 5 chars per word).
  const accuracy =
    totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100; //(correctChars / totalChars) * 100 gets the percentage.

  //Update Display.
  document.getElementById("wpm").textContent = isNaN(wpm) ? 0 : wpm;
  document.getElementById("accuracy").textContent = accuracy;
});

// Initialize test on page load
startTest();
