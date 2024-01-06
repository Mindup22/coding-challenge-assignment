// Variable to store the delay (in seconds)
var delayInSeconds = 3;

// Function to generate a random number after a delay
function generateRandomNumber() {
  let countdown = delayInSeconds;

  // Display countdown every second
  const countdownInterval = setInterval(function () {
    console.log(`Countdown: ${countdown} seconds`);

    if (countdown === 0) {
      clearInterval(countdownInterval); // Stop the countdown
      const randomNumber = Math.floor(Math.random() * 100); // Change the range as needed
      console.log(`Random Number Generated: ${randomNumber}`);
    } else {
      countdown--;
    }
  }, 1000);
}

// Start the countdown and generate the random number
setTimeout(generateRandomNumber, delayInSeconds * 1000);
