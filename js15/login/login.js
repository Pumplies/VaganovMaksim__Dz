const url = "https://46514905025047c8.mokky.dev/users";
const emailUser = document.querySelector(".email-user");
const passUser = document.querySelector(".password-user");
async function autenf() {
    let email = emailUser.value;
    let password = passUser.value;
    const response = await fetch(url);
    const users = await response.json();
    let authenticated = false;
    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        authenticated = true;
      }
    });
    if (authenticated) {
      console.log("Вход выполнен");
    } else {
      console.log("Ошибка");
    }
  } 