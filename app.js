let username = document.getElementById("username");
let pwd = document.getElementById("pwd");
let forms = document.getElementById("form-container");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value.length <= 6) {
    username.classList.add("error");
  }

  if (pwd.value.length <= 6) {
    pwd.classList.add("error");
  }
  if (username.value === "" || username.value.trim() === "") {
    username.classList.add("error");
  }

  if (pwd.value === "" || pwd.value.trim() === "") {
    pwd.classList.add("error");
  }
});
