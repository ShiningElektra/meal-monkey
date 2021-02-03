import { doc } from "prettier";
function createOTPInputElement() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "*";
  input.className = "input";

  return input;
}

export function createVerifyForm() {
  const verify = document.createElement("verify");
  verify.className = "verify";

  const headLine = document.createElement("h2");
  headLine.innerText = "We have send an OTP to your mobile";

  const subline = document.createElement("subline");
  subline.innerText =
    "Please check your mobile number 017******36 continue to reset your password";

  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const optFour = createOTPInputElement();

  const passwordContainer = document.createElement("div");
  passwordContainer.className = "verify__otp";
  passwordContainer.append(otpOne, otpTwo, otpThree, optFour);

  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = "next";

  function reset() {
    alert("Loged In");
  }
  button.addEventListener("click", reset);
  const end = document.createElement("bottum");
  end.innerText = "Didnt Recive?";

  verify.append(headLine, subline, passwordContainer, button);
  return verify;
}
