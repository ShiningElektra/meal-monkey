import "./numberpicker.css";
import { createNumberpicker } from "./numberpicker";

export default {
  title: "Components/Numberpicker",
  parameters: { layout: "centered" },
};

export const register = () => createNumberpicker();
