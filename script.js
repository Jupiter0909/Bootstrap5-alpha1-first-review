const emailAddress = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (confirmPassword.value === "" || confirmPassword.value === null) {
    messages.push("Enter the confirmation password");
    confirmPassword.classList.add("bg-danger");
  } else if (confirmPassword.value !== password.value) {
    messages.push("Passwords do not match");
  }

  if (messages.length > 0) {
    alert(messages);
    console.error(messages);
    e.preventDefault();
  }

  if (messages.length === 0) {
    alert("Success. An email with further instructions will be sent shortly");
  }
});
