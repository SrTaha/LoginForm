let floating_username = document.getElementById(`floating_username`);
let floating_password = document.getElementById(`floating_password`);
let RememberPass = document.getElementById(`RememberPass`);
let submitbtn = document.getElementById(`submitbtn`);
let forgotpassBtn = document.getElementById(`forgotpassBtn`);

function UsernameCheck(e) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3004/Accounts");
  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      data.forEach((elem) => {
        if (elem.UserName != e) {
          if (
            document.getElementById("Invalid-UserName") == null &&
            document.getElementById("ShortUserError") == null
          ) {
            floating_username.insertAdjacentHTML(
              "afterend",
              `<p class="text-white" id="Invalid-UserName">Invalid UserName</p>`
            );
          }
        } else if (elem.UserName == e) {
          document.getElementById("Invalid-UserName").remove();
        } else if (
          document.getElementById("Invalid-UserName") == null &&
          document.getElementById("ShortUserError") != null
        ) {
          document.getElementById("ShortUserError").remove();
        }
      });
    } else {
      console.log("Api status: ", xhr.status);
    }
  };
  xhr.send();
}

function Check() {
  if (
    floating_username.value.length < 6 &&
    document.getElementById("ShortUserError") == null
  ) {
    floating_username.insertAdjacentHTML(
      "afterend",
      `<p class="text-white" id="ShortUserError">UserName is too short !</p>`
    );
  } else if (
    floating_username.value.length > 6 &&
    document.getElementById("ShortUserError") != null
  ) {
    document.getElementById("ShortUserError").remove();
    UsernameCheck(floating_username.value);
  }
  if (
    floating_password.value.length == 0 &&
    document.getElementById("require-pass") == null
  ) {
    floating_password.insertAdjacentHTML(
      "afterend",
      `<p class="text-white" id="require-pass">Require PassWord</p>`
    );
  } else if (
    floating_password.value.length > 0 &&
    document.getElementById("require-pass") != null
  ) {
    document.getElementById("require-pass").remove();
  }
}

function PostData() {}

submitbtn.addEventListener("click", Check);
