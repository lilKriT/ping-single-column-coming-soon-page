const form = document.querySelector(".notify-me");
const emailField = document.querySelector("#email");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  let email = emailField.value.trim();

  if (!isValid(email, emailRegex)) {
    emailField.parentElement.classList.add("invalid");
    e.preventDefault();
  } else {
    emailField.parentElement.classList.remove("invalid");
  }
});

function isValid(field, regex) {
  return String(field).toLowerCase().match(regex);
}
