import { getUrlParams } from './utils.js'

async function init() {
  const postId = getUrlParams('post_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user`)
  const post = await res.json()

  const authorName = post.user.name

  const content = document.querySelector('#content')

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = post.id + '. ' + post.title

  const authorElement = document.createElement('span')
  authorElement.innerHTML = `Author: <a href="./user.html?user_id=${post.userId}">${authorName}</a>`

  const postBody = document.createElement('p')
  postBody.textContent = post.body

  content.append(pageTitle, authorElement, postBody)
}

init()