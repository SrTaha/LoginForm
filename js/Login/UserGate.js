let floatingUsername = document.getElementById(`floating_username`);
let floatingPassword = document.getElementById(`floating_password`);

function GetUser() {
  fetch("http://localhost:3004/Accounts")
    .then((Response) => Response.json())
    .then((Data) => {
      Data.forEach((element) => {
        if (
          element.Username == floatingUsername.value &&
          element.Password == floatingPassword.value
        ) {
          alert("Login Was Successful");
        }
      });
    });
}
