const counter = document.getElementById("counter");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const resetButton = document.getElementById("resetButton");
const MAX = 15;
const MIN = -15;

let currentValue = 0;
counter.textContent = currentValue;

addButton.addEventListener("click", () => {
  if (currentValue < MAX) {
    currentValue++;
    counter.textContent = currentValue;
  } else {
    alert("You have reached the maximum count!");
  }
});

subtractButton.addEventListener("click", () => {
  if (currentValue > MIN) {
    currentValue--;
    counter.textContent = currentValue;
  } else {
    alert("You have reached the minimum count!");
  }
});

resetButton.addEventListener("click", () => {
  currentValue = 0;
  counter.textContent = currentValue;
  alert("Counter has been set to 0");
});
