import { doc } from "prettier";
import { createElement } from "../utils/createElement";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
  });

  return input;
}
function createPasswordContainerElement() {
  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const optFour = createOTPInputElement();
  const passwordContainer = createElement("div", {
    className: "verify__otp",
    children: [otpOne, otpTwo, otpThree, optFour],
  });
  return passwordContainer;
}

export function createVerifyForm() {
  const verify = document.createElement("verify");
  verify.className = "verify";

  const headLine = createElement("h2", {
    innerText: "We have send an OTP to your mobile",
  });

  const subline = createElement("subline", {
    innerText:
      "Please check your mobile number 017******36 continue to reset your password",
  });

  const passwordContainer = createPasswordContainerElement();

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
