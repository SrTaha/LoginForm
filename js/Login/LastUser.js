let UsernameBox = document.getElementById(`floating_username`);
let PasswordBox = document.getElementById(`floating_password`);
let RememberPassword = document.getElementById(`RememberPass`);
let SubmitBtn = document.getElementById(`submitBtn`);

function Action() {
  fetch("http://localhost:3004/LastUser")
    .then((res) => res.json())
    .then((data) => {
      UsernameBox.value = data[0].Username;
    });
}

Action();

function saveToRemember() {
  fetch("http://localhost:3004/LastUser/1", {
    method: "Put",
    body: JSON.stringify({ Username: UsernameBox.value }),
    headers: { "content-type": "application/json" },
  });
}

function UserExist() {
  fetch("http://localhost:3004/Accounts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        if (
          element.Username == UsernameBox.value &&
          element.Password == PasswordBox.value &&
          RememberPassword.checked == true
        ) {
          saveToRemember();
        }
      });
    });
}

SubmitBtn.addEventListener("click", UserExist, true);
