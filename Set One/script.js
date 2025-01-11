//changing text styles

const fontSizeSelector = document.getElementById("fontSize");
const fontColorSelector = document.getElementById("fontColor");
const fontFamilySelector = document.getElementById("fontFamily");
const paragraph = document.getElementById("text");

fontSizeSelector.addEventListener("change", function () {
  paragraph.style.fontSize = fontSizeSelector.value;
});

fontColorSelector.addEventListener("change", function () {
  paragraph.style.color = fontColorSelector.value;
});

fontFamilySelector.addEventListener("change", function () {
  paragraph.style.fontFamily = fontFamilySelector.value;
});

//button with counter

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");

let count = 0;

clicker.addEventListener("click", function () {
  count++;
  counter.textContent = `I have been clicked ${count} times`;
});

//toggle input for password type between 'password' and 'text'to change visibility using the checkbox

const inputPassword = document.getElementById("input");
const checkbox = document.getElementById("check");

function passwordVisibility() {
  if (checkbox.checked) {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}

checkbox.addEventListener("change", passwordVisibility);

//Realtime 200 Character counter showing remaining characters using the input event handler

const charCount = document.getElementById("charCount");
const inputText = document.getElementById("inputText");

const maxChar = 200;

function characterCount() {
  const chars = inputText.value.length;
  const remainingChar = maxChar - chars;
  charCount.textContent = `characters remaining ${remainingChar}`;
  if (chars > maxChar) {
    inputText.value = inputText.value.slice(0, maxChar);
  }
}

inputText.addEventListener("input", characterCount);
