let floating_username = document.getElementById(`floating_username`);
let floating_password = document.getElementById(`floating_password`);
let RememberPass = document.getElementById(`RememberPass`);
let submitbtn = document.getElementById(`submitbtn`);
let forgotpassBtn = document.getElementById(`forgotpassBtn`);

function GetData(e) {
  fetch("../db.json")
    .then((res) => {
      res.json;
    })
    .then((data) => {
      data.forEach((elem) => {
        if (elem.UserName == e) {
          return true;
        }
      });
    });
}

function UsernameLength() {
  if (floating_username.value.length < 6) {
    floating_username.insertAdjacentHTML(
      "afterend",
      `<p class="text-white">UserName is too short !</p>`
    );
  } else if (GetData(floating_username) != true) {
    floating_username.insertAdjacentHTML(
      "afterend",
      `<p class="text-white">Invalid UserName</p>`
    );
  }
}

function PostData() {}

submitbtn.addEventListener("click", UsernameLength);
