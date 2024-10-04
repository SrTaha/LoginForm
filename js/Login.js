let floating_email = document.getElementById(`floating_email`).value;
let floating_password = document.getElementById(`floating_password`).value;
let RememberPass = document.getElementById(`RememberPass`);
let submitbtn = document.getElementById(`submitbtn`);
let forgotpassBtn = document.getElementById(`forgotpassBtn`);

function EmailValication() {
  const validator = require("validator");
  const email = "hello@gmail,com";
  const isValid = validator.isEmail(email);
  console.log(isValid);
}

submitbtn.addEventListener("click", EmailValication, true);
