import header from './header.js'
import { getUrlParams } from './utils.js'

async function init() {
  const postId = getUrlParams('post_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
  const post = await res.json()

  const authorName = post.user.name

  const content = document.querySelector('#content')

  // const headerElement = header()
  // content.before(headerElement)

  content.before(header())

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = post.id + '. ' + post.title

  const authorElement = document.createElement('span')
  authorElement.innerHTML = `Author: <a href="./user.html?user_id=${post.userId}">${authorName}</a>`

  const postBody = document.createElement('p')
  postBody.textContent = post.body

  content.append(pageTitle, authorElement, postBody)

  if (post.comments.length > 0) {
    const commentsWrapper = document.createElement('div')
    commentsWrapper.classList.add('comments-wrapper')

    const commentsSectionTitle = document.createElement('h2')
    commentsSectionTitle.textContent = 'Comments:'

    const commentsList = document.createElement('div')
    commentsList.classList.add('comments-list')

    commentsWrapper.append(commentsSectionTitle, commentsList)
    content.append(commentsWrapper)

    post.comments.forEach(comment => {
      const commentItem = document.createElement('div')
      commentItem.classList.add('comment-item')

      const commentName = document.createElement('h3')
      commentName.textContent = comment.name

      const commentEmail = document.createElement('span')
      commentEmail.textContent = `Comment by ${comment.email}`

      const commentBody = document.createElement('p')
      commentBody.textContent = comment.body

      commentItem.append(commentName, commentEmail, commentBody)
      commentsList.append(commentItem)
    })
  }
}

init()