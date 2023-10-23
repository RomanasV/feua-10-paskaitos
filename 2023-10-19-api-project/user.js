import header from './header.js'
import { getUrlParams } from './utils.js'

async function init() {
  const userId = getUrlParams('user_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
  const user = await res.json()

  const content = document.querySelector('#content')
  const userInfo = userInfoElement(user)
  // const postsWrapper = getUserPosts(user)
  // const albumsWrapper = getUserAlbums(user)

  const postsWrapper = getLinksList(user.name, 'Posts', user.posts, 'post')
  const albumsWrapper = getLinksList(user.name, 'Albums', user.albums, 'album')

  content.before(header())
  content.append(userInfo, postsWrapper, albumsWrapper)
}

init()

function userInfoElement(user) {
  const userInfoWrapper = document.createElement('div')
  userInfoWrapper.classList.add('user-info-wrapper')

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = `${user.name} (${user.username})`

  const contactsElement = document.createElement('div')
  contactsElement.classList.add('contacts')

  const contactsTitle = document.createElement('h2')
  contactsTitle.textContent = 'Contacts:'

  const contactsList = document.createElement('ul')

  const emailElement = document.createElement('li')
  emailElement.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`

  const phoneElement = document.createElement('li')
  phoneElement.innerHTML = `Phone: <a href="tel:${user.phone}">${user.phone}</a>`

  contactsList.append(emailElement, phoneElement)
  contactsElement.append(contactsTitle, contactsList)

  userInfoWrapper.append(pageTitle, contactsElement)

  return userInfoWrapper
}

function getUserPosts(user) {
  const postsWrapper = document.createElement('div')
  postsWrapper.classList.add('posts-wrapper')

  const postsSectionTitle = document.createElement('h2')
  postsSectionTitle.textContent = 'Posts of ' + user.name + ':'

  const postsList = document.createElement('ul')

  user.posts.forEach(post => {
    const postItem = document.createElement('li')

    const postLink = document.createElement('a')
    postLink.textContent = post.title
    postLink.href = `./post.html?post_id=${post.id}`

    postItem.append(postLink)
    postsList.append(postItem)
  })

  postsWrapper.append(postsSectionTitle, postsList)

  return postsWrapper
}

function getUserAlbums(user) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('albums-wrapper')

  const sectionTitle = document.createElement('h2')
  sectionTitle.textContent = 'Albums of ' + user.name + ':'

  const list = document.createElement('ul')

  user.albums.forEach(album => {
    const item = document.createElement('li')

    const link = document.createElement('a')
    link.textContent = album.title
    link.href = `./album.html?album_id=${album.id}`

    item.append(link)
    list.append(item)
  })

  wrapper.append(sectionTitle, list)

  return wrapper
}

function getLinksList(userName, listTitle, list, url) {
  const className = listTitle.toLowerCase()
  
  const wrapper = document.createElement('div')
  wrapper.classList.add('links-wrapper')
  
  if (listTitle) {
    wrapper.classList.add(className + '-wrapper')
  }

  const sectionTitle = document.createElement('h2')
  sectionTitle.textContent = `${listTitle} of ${userName} not found...`

  wrapper.append(sectionTitle)

  if (list.length > 0) {
    sectionTitle.textContent = listTitle + ' of ' + userName + ':'

    const listElement = document.createElement('ul')
  
    list.forEach(itemData => {
      const item = document.createElement('li')
  
      const link = document.createElement('a')
      link.textContent = itemData.title
      link.href = `./${url}.html?${url}_id=${itemData.id}`
  
      item.append(link)
      listElement.append(item)
    })

    wrapper.append(listElement)
  }

  return wrapper
}