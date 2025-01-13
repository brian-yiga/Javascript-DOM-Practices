
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

