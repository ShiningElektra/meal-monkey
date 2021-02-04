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
const otpOne = createOTPInputElement();
const otpTwo = createOTPInputElement();
const otpThree = createOTPInputElement();
const optFour = createOTPInputElement();
const passwordContainer = createElement("div", {
  className: "verify__otp",
  children: [otpOne, otpTwo, otpThree, optFour],
});

export function createVerifyForm() {
  const verify = document.createElement("form");
  verify.className = "verify";

  const headLine = createElement("h2", {
    innerText: "We have send an OTP to your mobile",
  });

  const subline = createElement("subline", {
    innerText:
      "Please check your mobile number 017******36 continue to reset your password",
  });

  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = "next";

  verify.addEventListener("submit", function (event) {
    event.preventDefault();

    const secretPassword = "4321";

    if (
      `${otpOne.value}${otpTwo.value}${otpThree.value}${optFour.value}` ===
      secretPassword
    ) {
      alert("The password is correct");
    } else {
      alert("Next Try");
    }
  });

  const hint = document.createElement("botton");
  hint.className = "verify__hint";
  hint.innerText = "Didnt Recive?";

  verify.append(headLine, subline, passwordContainer, button, hint);
  return verify;
}
