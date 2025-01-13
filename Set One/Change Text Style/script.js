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

