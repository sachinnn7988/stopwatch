// script.js
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  display.textContent = 
    `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    startStopBtn.textContent = "Start";
  } else {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
    startStopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  startTime = null;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
});
