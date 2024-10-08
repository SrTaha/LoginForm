// connecting html elements to Js file

let floating_username = document.getElementById(`floating_username`);
let floating_password = document.getElementById(`floating_password`);
let RememberPass = document.getElementById(`RememberPass`);
let submitBtn = document.getElementById(`submitBtn`);
let forgotPassBtn = document.getElementById(`forgotPassBtn`);
let UserNameError = document.getElementById(`UserNameError`);
let PassWordError = document.getElementById(`PassWordError`);

// For Checking Both inputs I Used Minimum Length Method

let userStatus = false;
let passwordStatus = false;
// UserName Check

function UserCheck() {
  if (floating_username.value.length == 0) {
    UserNameError.innerHTML = `Username Required`;
    userStatus = false;
  } else if (floating_username.value.length <= 5) {
    UserNameError.innerHTML = `Username should be more than 5 characters`;
    userStatus = false;
  } else {
    fetch("http://localhost:3004/Accounts")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((elem) => {
          if (elem.Username != floating_username.value) {
            UserNameError.innerHTML = `Invalid Username`;
            userStatus = false;
          } else {
            UserNameError.innerHTML = "";
            userStatus = true;
          }
        });
      });
  }
}

function PassWordCheck() {
  if (floating_password.value.length == 0) {
    PassWordError.innerHTML = `Password Required`;
    passwordStatus = false;
  } else {
    PassWordError.innerHTML = ``;
    passwordStatus = true;
  }
}

submitBtn.addEventListener("click", UserCheck);
submitBtn.addEventListener("click", PassWordCheck);
submitBtn.addEventListener("click", () => {
  if (userStatus == true && passwordStatus == true) {
    console.log(true);
    GetUser();
  }
});
