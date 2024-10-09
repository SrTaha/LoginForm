let floatingUsername = document.getElementById(`floating_username`);
let floatingPassword = document.getElementById(`floating_password`);
let DataNotMatch = document.getElementById(`DataNotMatch`);

function GetUser() {
  console.log(true);

  fetch("http://localhost:3004/Accounts")
    .then((Response) => Response.json())
    .then((Data) => {
      Data.forEach((element) => {
        if (
          element.Username == floatingUsername.value &&
          element.Password == floatingPassword.value
        ) {
          DataNotMatch.innerHTML = "";
          alert("Login Was Successful");
        } else {
          DataNotMatch.innerHTML = "Incorrect Username or Password";
        }
      });
    });
}
