const form = document.querySelector(".notify-me");
const emailField = document.querySelector("#email");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (e) => {
    alert("Submit");
});

function isValid(field, regex) {
  return String(field).toLowerCase().match(regex);
}
