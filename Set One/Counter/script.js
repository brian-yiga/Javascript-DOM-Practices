

//button with counter

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");

let count = 0;

clicker.addEventListener("click", function () {
  count++;
  counter.textContent = `I have been clicked ${count} times!!`;
});

