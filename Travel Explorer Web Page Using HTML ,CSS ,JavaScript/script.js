// Dynamic Welcome Message

function updateWelcomeMessage() {
  //updateWelcomeMessage(), which updates the text of the welcome message dynamically based on the time of day.
  let now = new Date(); //Creates a new Date object (now), which holds the current date and time.
  let hours = now.getHours(); //Extracts the current hour (0 to 23) from the Date object.

  if (hours < 12) {
    //Morning (before 12 PM).
    message = "Good Morning! Ready to explore?";
  } else if (hours < 18) {
    //Afternoon (12 PM - 6 PM).
    message = "Good Afternoon! Time for an adventure!";
  } else {
    //Evening (6 PM onwards).
    message = "Good Evening! Plan your next trip!";
  }

  document.getElementById("welcome-message").innerText = message;
}

// Travel Tips
function showTip() {
  //showTip(), which generates and displays a random travel tip.

  const tips = [
    "Pack light and travel smart!",
    "Always keep a copy of important documents.",
    "Learn a few local phrases before visiting a new country.",
    "Try the local food for an authentic experience!",
    "Wake up early to explore without the crowds.",
  ]; //Creates an array of travel tips, which will be randomly selected when the function is called.

  const randomTip = tips[Math.floor(Math.random() * tips.length)]; //Math.random() generates a decimal between 0 and 1.Multiplying it by tips.length scales it to the number of tips.Math.floor() rounds it down to get a valid array index.

  document.getElementById("tip").innerText = randomTip;
}

// Smooth Scrolling for Internal Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    if (this.getAttribute("href").startsWith("#")) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Initialize functions
updateWelcomeMessage();
