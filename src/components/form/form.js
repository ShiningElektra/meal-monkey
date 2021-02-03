export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = "Sign In";

  function login() {
    alert("Loged In");
  }
  button.addEventListener("click", login);

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const hint = document.createElement("h2");
  hint.innerText = "Please enter your Email to reset yout Password";

  form.append(title, hint, button);
  return form;
}
