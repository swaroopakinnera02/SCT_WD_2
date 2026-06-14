let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

// Update Stopwatch Display
function updateDisplay() {

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  // Display with Hours, Minutes, Seconds
  display.innerText = `${h}h : ${m}m : ${s}s`;
}

// Start Stopwatch
function startStopwatch() {

  if (!running) {

    running = true;

    timer = setInterval(() => {

      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();

    }, 1000);
  }
}

// Pause Stopwatch
function pauseStopwatch() {

  running = false;
  clearInterval(timer);
}

// Reset Stopwatch
function resetStopwatch() {

  running = false;
  clearInterval(timer);

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateDisplay();

  // Clear all lap times
  laps.innerHTML = "";
}

// Record Lap Time
function recordLap() {

  if (running) {

    const lapItem = document.createElement("li");

    lapItem.innerText =
      `Lap ${laps.children.length + 1} - ${display.innerText}`;

    // Add newest lap at top
    laps.prepend(lapItem);
  }
}

// Button Events
document
  .getElementById("start")
  .addEventListener("click", startStopwatch);

document
  .getElementById("pause")
  .addEventListener("click", pauseStopwatch);

document
  .getElementById("reset")
  .addEventListener("click", resetStopwatch);

document
  .getElementById("lap")
  .addEventListener("click", recordLap);

// Initial Display
updateDisplay();