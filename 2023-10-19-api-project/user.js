import { getUrlParams } from './utils.js'

async function init() {
  const userId = getUrlParams('user_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const user = await res.json()
  console.log(user)

  const content = document.querySelector('#content')

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = user.name

  content.append(pageTitle)
}

init()