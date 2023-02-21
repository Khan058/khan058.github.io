const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");

function validatePassword() {
  if (password.value !== confPassword.value) {
    confPassword.setCustomValidity("Password does not match!");
  } else {
    confPassword.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confPassword.onkeyup = validatePassword;
