async function init() {
  // fetch('movies.json')
  //   .then(res => res.json())
  //   .then(movies => {
  //     console.log(movies)
  //   })

  const res = await fetch('movies.json')
  const movies = await res.json()

  const moviesList = document.querySelector('#movies-list')

  movies.forEach((movie) => {
    const movieItem = document.createElement('div')
    movieItem.classList.add('movie-item')

    const titleElement = document.createElement('h2')
    titleElement.textContent = `${movie.movieName} (${movie.releaseDate})`

    const ratingElement = document.createElement('span')
    ratingElement.textContent = `Rating: ${movie.ratings.rate} (${movie.ratings.rated})`

    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = movie.aboutMovie

    const actorsWrapper = document.createElement('div')
    actorsWrapper.classList.add('actors-wrapper')

    const actorsTitle = document.createElement('h3')
    actorsTitle.textContent = 'Actors:'

    const actorsList = document.createElement('ul')

    movie.actors.forEach(actor => {
      const actorItem = document.createElement('li')
      actorItem.textContent = actor

      actorsList.append(actorItem)
    })

    actorsWrapper.append(actorsTitle, actorsList)

    const genresWrapper = document.createElement('div')
    genresWrapper.classList.add('genres-wrapper')

    const genresTitle = document.createElement('h3')
    genresTitle.textContent = 'Genres:'

    const genresList = document.createElement('ul')

    movie.genres.forEach(genre => {
      const genreItem = document.createElement('li')
      genreItem.textContent = genre

      genresList.append(genreItem)
    })

    genresWrapper.append(genresTitle, genresList)

    const producersWrapper = document.createElement('div')
    producersWrapper.classList.add('producers-wrapper')

    const producersTitle = document.createElement('h3')
    producersTitle.textContent = 'Producers:'

    const producersList = document.createElement('ul')

    movie.producers.forEach(producer => {
      const producerItem = document.createElement('li')
      producerItem.textContent = producer

      producersList.append(producerItem)
    })

    producersWrapper.append(producersTitle, producersList)

    movieItem.append(titleElement, ratingElement, descriptionElement, actorsWrapper, genresWrapper, producersWrapper)

    moviesList.append(movieItem)
  })
}

init()