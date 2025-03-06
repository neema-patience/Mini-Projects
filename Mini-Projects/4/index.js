let secondsElapsed = 0; // Tracks the number of seconds elapsed
let interval = null; // Holds the interval ID for the timer
const time = document.getElementById("time"); // Reference to the HTML element displaying the time

function padStart(value){
    return String(value).padStart(2,"0")
}

// Function to update the displayed time
function setTimer() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds; // Format as M:SS
}

// Function to increment the seconds elapsed
function incrementTimer() {
    secondsElapsed++; // Increase the seconds elapsed by 1
}

// Function to start the stopwatch
function startClock() {
    if (interval) return; // Prevent starting a new interval if one is already running
    interval = setInterval(() => {
        incrementTimer(); // Increment the timer
        setTimer(); // Update the display to show the current time
    }, 1000); // Set an interval to call incrementTimer every second
}


// Function to stop the stopwatch
function stopClock() {
    if (interval) {
        clearInterval(interval); // Clear the interval to stop the timer
        interval = null; // Reset the interval variable
    }
}


// Function to reset the stopwatch
function resetClock() {
    clearInterval(interval); // Clear the interval to stop the timer
    secondsElapsed = 0; // Reset seconds elapsed to 0
    setTimer(); // Update the display to show the reset time
}
