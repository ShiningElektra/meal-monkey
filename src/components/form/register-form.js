{
  /* <form class="form">
    <h2>Reset Password</h2>
    <p>
    Please enter your email to receive a link to create a new password via email</p>
    <input placeholder="email" />
    <input type="submit" />
    </form> */
}

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "Reset Password";
  title.className = "title-text";

  const button = document.createElement("button");
  button.innerText = "Register";
  button.className = "btn btn-border";

  function register() {
    alert("Registered");
  }

  button.addEventListener("click", register);

  form.append(title, button);

  return form;
}
