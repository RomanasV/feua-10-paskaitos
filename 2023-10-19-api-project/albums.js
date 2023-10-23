import header from "./header.js"

async function init() {
  const albums = await getAlbums()

  const content = document.querySelector('#content')
  content.before(header())

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = 'Albums:'
  content.append(pageTitle)
  
  if (albums.length === 0) {
    pageTitle.textContent = 'No albums :('
    return
  }
  
  const albumsList = document.createElement('div')
  albumsList.classList.add('albums-list')
  content.append(albumsList)

  albums.forEach(album => {
    const photoSrc = album.photos[0].thumbnailUrl
    const photoAlt = album.photos[0].title
    const photosCount = album.photos.length
    const albumAuthor = album.user.name
    const albumItem = document.createElement('div')
    albumItem.classList.add('album-item')
    const albumLink = document.createElement('a')
    albumLink.href = './album.html?album_id=' + album.id

    const albumTitle = document.createElement('h2')
    albumTitle.textContent = `${album.title} (${photosCount})`

    const authorElement = document.createElement('span')
    authorElement.textContent = `Created by: ${albumAuthor}`

    const image = document.createElement('img')
    image.src = photoSrc
    image.alt = photoAlt

    albumLink.append(albumTitle, authorElement, image)

    albumItem.append(albumLink)
    albumsList.append(albumItem)
  })
}

init()

async function getAlbums() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=25&_expand=user&_embed=photos')
  const albums = await res.json()

  return albums
}