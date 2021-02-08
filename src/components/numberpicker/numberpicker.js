import { createElement } from "../utils/createElement";

export function createNumberpicker() {
  return createElement("input", {
    className: "input",
    placeholder: "1",
    type: "number",
  });
}
