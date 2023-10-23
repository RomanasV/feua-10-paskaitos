import header from './header.js'
import { firstLetterUpperCase, getUrlParams } from './utils.js'

async function init() {
  const albumId = getUrlParams('album_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`)
  const album = await res.json()

  const content = document.querySelector('#content')

  const headerElement = header()

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = firstLetterUpperCase(album.title)

  const albumAuthor = document.createElement('span')
  albumAuthor.innerHTML = `Album created by <a href="./user.html?user_id=${album.user.id}">${album.user.name}</a>`

  const albumsList = document.createElement('div')
  albumsList.classList.add('albums-list')

  album.photos.forEach(photo => {
    const imageElement = document.createElement('img')
    imageElement.src = photo.thumbnailUrl
    imageElement.alt = photo.title

    albumsList.append(imageElement)
  })

  content.before(headerElement)
  content.append(pageTitle, albumAuthor, albumsList)
}

init()