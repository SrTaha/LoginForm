// connecting html elements to Js file

let floating_username = document.getElementById(`floating_username`);
let floating_password = document.getElementById(`floating_password`);
let RememberPass = document.getElementById(`RememberPass`);
let submitBtn = document.getElementById(`submitBtn`);
let forgotPassBtn = document.getElementById(`forgotPassBtn`);
let UserNameError = document.getElementById(`UserNameError`);
let PassWordError = document.getElementById(`PassWordError`);

// For Checking Both inputs I Used Minimum Length Method

// UserName Check

function UserCheck() {
  if (floating_username.value.length == 0) {
    UserNameError.innerHTML = `Username Required`;
  } else if (floating_username.value.length <= 6) {
    UserNameError.innerHTML = `Username should be more than 6 characters`;
  } else if (floating_username.value.length > 6) {
    UserNameError.innerHTML = "";
  }
}

function PassWordCheck() {
  console.log(floating_password.value);
  if (floating_password.value.length == 0) {
    PassWordError.innerHTML = `Password Required`;
  } else {
    PassWordError.innerHTML = ``;
  }
}

submitBtn.addEventListener("click", UserCheck);
submitBtn.addEventListener("click", PassWordCheck);
