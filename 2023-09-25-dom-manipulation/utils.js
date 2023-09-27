export function createElement(className, tag = 'div', text = '') {
  let element = document.createElement(tag)
  if (className) {
    element.classList.add(className)
  }
  element.textContent = text

  return element
}