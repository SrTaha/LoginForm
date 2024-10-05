let floating_username = document.getElementById(`floating_username`);
let floating_password = document.getElementById(`floating_password`);
let RememberPass = document.getElementById(`RememberPass`);
let submitbtn = document.getElementById(`submitbtn`);
let forgotpassBtn = document.getElementById(`forgotpassBtn`);

function GetData(e) {
  fetch("http://localhost:3004/Accounts")
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(typeof data);

      data.forEach((elem) => {
        if (elem.UserName != e) {
          floating_username.insertAdjacentHTML(
            "afterend",
            `<p class="text-white">Invalid UserName</p>`
          );
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
  } else if (floating_username.value.length > 6) {
    GetData(floating_username.value);
  }
}

function PostData() {}

submitbtn.addEventListener("click", UsernameLength);
