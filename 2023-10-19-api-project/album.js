import { getUrlParams } from './utils.js'

async function init() {
  const albumId = getUrlParams('album_id')

  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
  const album = await res.json()

  const content = document.querySelector('#content')

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = album.title

  content.append(pageTitle)
}

init()