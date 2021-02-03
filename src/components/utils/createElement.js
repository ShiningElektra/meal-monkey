export function createElement(tagName, probs) {
  const element = document.createElement(tagName);
  Object.assign(element, probs);

  return element;
}
