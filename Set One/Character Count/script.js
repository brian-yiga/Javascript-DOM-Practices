
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
