let UsernameBox = document.getElementById(`floating_username`);
let RememberPassword = document.getElementById(`RememberPass`);
let SubmitBtn = document.getElementById(`submitBtn`);

function Action() {
  fetch("http://localhost:3004/LastUser")
    .then((res) => res.json())
    .then((data) => {
      UsernameBox.value = data[0].Username;
    });
}

function saveToRemember() {
  if (RememberPassword.checked == true) {
    fetch("http://localhost:3004/LastUser/1", {
      method: "Put",
      body: JSON.stringify({ Username: UsernameBox.value }),
      headers: { "content-type": "application/json" },
    });
  }
}

SubmitBtn.addEventListener("click", saveToRemember);
