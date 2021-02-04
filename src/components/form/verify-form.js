import { createElement } from "../utils/createElement";

function createInputElement() {
  return createElement("input", {
    classname: "input",
    placeholder: "*",
    type: "number",
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const otpOne = createInputElement();
  const otpTwo = createInputElement();
  const otpThree = createInputElement();
  const optFour = createInputElement();

  const messageElement = createElement("p", {
    className: "massage",
  });

  return createElement("from", {
    className: "verify",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 017******36 continue to reset your password",
      }),
      createElement("div", {
        className: "verify__otp",
        children: [otpOne, otpTwo, otpThree, optFour],
      }),
      createElement("input", {
        type: "submit",
        innerText: "Next",
        className: "btn,",
      }),
      createElement("p", {
        innerText: "Didn't Recive?",
        className: "verify__hint",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        otpOne.value + otpTwo.value + otpThree.value + optFour.value;
      if (password === "4321") {
        alert("The password is correct");
      } else {
        messageElement.innerText = "wrong password!";
      }
    },
  });
}
