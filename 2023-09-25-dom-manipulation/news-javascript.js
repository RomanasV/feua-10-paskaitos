import { createElement } from './utils.js'

let content = document.querySelector('#content')

let container = createElement('container')
content.append(container)

let pageContent = createElement('page-content')
container.append(pageContent)

let mainContent = createElement('main-content')

let newsSection = createElement('news-section')

let pageTitle = createElement('page-title', 'h1', 'Naujienos')

let mainNews = createElement('main-news')

let mainNewsArticle1 = createNewsArticle('Ar „ChatGPT“ užims mūsų darbo vietas?!', '#', 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg', 'AI & Deep Learning', '2023-01-27')
let mainNewsArticle2 = createNewsArticle('Ar „ChatGPT“ užims mūsų darbo vietas?', '#', 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg', 'AI & Deep Learning', '2023-01-27')

mainNews.append(mainNewsArticle1, mainNewsArticle2)

let secondaryNews = createElement('secondary-news')

let secondaryNewsArticle1 = createNewsArticle('Ar „ChatGPT“ užims mūsų darbo vietas?', '#', 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg', 'AI & Deep Learning', '2023-01-27')
let secondaryNewsArticle2 = createNewsArticle('Ar „ChatGPT“ užims mūsų darbo vietas?', '#', 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg', 'AI & Deep Learning', '2023-09-27')
let secondaryNewsArticle3 = createNewsArticle('Ar „ChatGPT“ užims mūsų darbo vietas?', '#', 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg', 'AI & Deep Learning', '2023-01-27')
let secondaryNewsArticle4 = createNewsArticle('Ar „ChatGPT“ užims mūsų darbo vietas?', '#', 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg', 'AI & Deep Learning', '2023-01-27')

secondaryNews.append(secondaryNewsArticle1, secondaryNewsArticle2, secondaryNewsArticle3, secondaryNewsArticle4)

let moreNewsButton = largeLink('Visos naujienos', '#')

newsSection.append(pageTitle, mainNews, secondaryNews, moreNewsButton)

let videoSection = createElement('video-section')

let videoSectionTitle = createElement('section-title', 'h2', 'Vaizdo įrašai')

let videoWrapper = createElement('video-wrapper')
videoWrapper.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA?si=JISxOnbUZxyk1MGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

let videoSectionSubTitle = createElement('section-sub-title', 'h3', 'Jei galiu aš – gali ir tu!')

let allVideosButton = largeLink('Visi vaizdo įrašai', '#')

videoSection.append(videoSectionTitle, videoWrapper, videoSectionSubTitle, allVideosButton)

mainContent.append(newsSection, videoSection)

let sidebarContent = createElement('sidebar-content')

let podcastSection = createElement('podcast-section')

let podcastSectionTitle = createElement('section-title', 'h2', 'Podcastai ir radijo laidos')

let podcastsList = createElement('podcasts-list')

let podcastItem1 = createPodcastItem('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', 'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png', '7:55', '2022-05-07')
let podcastItem2 = createPodcastItem('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', 'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png', '3:55', '2023-05-07')
let podcastItem3 = createPodcastItem('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', 'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png', '2:55', '2022-08-07')
let podcastItem4 = createPodcastItem('Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas', 'https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png', '4:55', '2022-05-25')

podcastsList.append(podcastItem1, podcastItem2, podcastItem3, podcastItem4)

podcastSection.append(podcastSectionTitle, podcastsList)

let eventsSection = createElement('events-section')

let eventSectionTitle = createElement('section-title', 'h2', 'Renginiai')

let eventsList = createElement('events-list')

let eventItem1 = createEventItem('Big data conference Europe 2023', 'Vilnius, Lithuania & online', 21, 'Sau', 'https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg')
let eventItem2 = createEventItem('Big data conference Europe 2022', 'Vilnius, Lithuania & online', 15, 'Lap')
let eventItem3 = createEventItem('Big data conference Europe 2021', 'Vilnius, Lithuania & online', 3, 'Spa')

eventsList.append(eventItem1, eventItem2, eventItem3)

let moreEventsButton = largeLink('Daugiau', '#')

eventsSection.append(eventSectionTitle, eventsList, moreEventsButton)

sidebarContent.append(podcastSection, eventsSection)

pageContent.append(mainContent, sidebarContent)


function createNewsArticle(title, url, image, category, date) {
  let newsArticle = createElement('news-article')

  let link = document.createElement('a')
  link.href = url

  let imageWrapper = createElement('article-image-wrapper')

  let imageElement = createElement('article-image', 'img')
  imageElement.src = image

  imageWrapper.append(imageElement)

  let contentWrapper = createElement('article-content-wrapper')

  let categoryElement = createElement('article-category', 'span', category)
  let titleElement = createElement('article-title', 'h2', title)
  let dateElement = createElement('article-date', 'span', date)

  contentWrapper.append(categoryElement, titleElement, dateElement)

  link.append(imageWrapper, contentWrapper)
  
  newsArticle.append(link)
  return newsArticle
}

function createPodcastItem(title, image, length, date) {
  let podcastItem = createElement('podcast-item')

  let imageElement = createElement('podcast-image', 'img')
  imageElement.src = image

  let lengthElement = createElement('podcast-length', 'span', `Trukmė: ${length}`)
  let playButtonElement = createElement('podcast-play', 'button', 'Play')

  let podcastContent = createElement('podcast-content')

  let podcastTitle = createElement('podcast-title', 'h3', title)

  let podcastDate = createElement('podcast-date', 'span', date)

  podcastContent.append(podcastTitle, podcastDate)

  podcastItem.append(imageElement, lengthElement, playButtonElement, podcastContent)

  return podcastItem
}

function createEventItem(title, location, day, month, image) {
  let eventItem = createElement('event-item')

  if (image) {
    let imageElement = createElement('event-image', 'img')
    imageElement.src = image

    eventItem.append(imageElement)
  }

  let contentElement = createElement('event-content')

  let dateElement = createElement('event-date')

  let dayElement = createElement('event-day', 'span', day)
  let monthElement = createElement('event-month', 'span', month)

  dateElement.append(dayElement, monthElement)

  let locationElement = createElement('event-location', 'span', location)
  let titleElement = createElement('event-title', 'h2', title)

  contentElement.append(dateElement, locationElement, titleElement)

  eventItem.append(contentElement)

  return eventItem
}

function largeLink(text, url) {
  let linkElement = document.createElement('a')
  linkElement.classList.add('large-link')
  linkElement.textContent = text
  linkElement.href = url

  return linkElement
}