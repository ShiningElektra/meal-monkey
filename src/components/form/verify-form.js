import { doc } from "prettier";

export function createVerifyForm() {
  const verify = document.createElement("verify");

  const headLine = document.createElement("h2");
  headLine.innerText = "We have send an OTP to your mobile";

  const subline = document.createElement("subline");
  subline.innerText =
    "Please check your mobile number 017******36 continue to reset your password";

  const password = document.createElement("input");
  password.className = "first-password";
  password.type = "password";
  password.placeholder = "*";

  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = "next";

  function reset() {
    alert("Loged In");
  }
  button.addEventListener("click", reset);
  const end = document.createElement("bottum");
  end.innerText = "Didnt Recive?";

  verify.append(headLine, subline, password, button, end);
  return verify;
}
