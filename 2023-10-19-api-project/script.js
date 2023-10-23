import header from "./header.js"

function init() {
  const content = document.querySelector('#content')
  content.before(header())
}

init()