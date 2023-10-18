async function getChuckJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const joke = await response.json()

  const jokeParagraph = document.querySelector('#joke-paragraph')
  jokeParagraph.textContent = joke.value
}

// getChuckJoke()

function getChuckJoke2() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => {
      const jokeParagraph = document.querySelector('#joke-paragraph')
      jokeParagraph.textContent = joke.value
    })
}

// getChuckJoke2()


async function chuckJokeCategories() {
  const response = await fetch('https://api.chucknorris.io/jokes/categories')
  const categories = await response.json()

  const categoriesSelect = document.querySelector('#category-select')

  categories.forEach(category => {
    const categoryOption = document.createElement('option')
    categoryOption.textContent = category

    categoriesSelect.append(categoryOption)
  })

  const categoryForm = document.querySelector('#category-form')

  categoryForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const selectedCategory = categoriesSelect.value
    const categoryUrl = `https://api.chucknorris.io/jokes/random?category=` + selectedCategory

    // fetch(categoryUrl)
    //   .then(response => response.json())
    //   .then(joke => {
    //     console.log(joke)
    //   })

    const response = await fetch(categoryUrl)
    const joke = await response.json()

    const jokeParagraph = document.querySelector('#joke-paragraph')
    jokeParagraph.textContent = joke.value
  })
}

chuckJokeCategories()

function randomJoke() {
  const randomJokeButton = document.querySelector('#random-joke-button')
  randomJokeButton.addEventListener('click', () => {
    getChuckJoke()
  })
}

randomJoke()

function searchFormHandler() {
  const searchForm = document.querySelector('#search-form')

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const searchPhrase = event.target.search.value
    const fetchUrl = `https://api.chucknorris.io/jokes/search?query=${searchPhrase}`

    // fetch(fetchUrl)
    //   .then(res => res.json())
    //   .then(data => {
        // const jokes = data.result
        // const jokesLength = jokes.length
        // const randomIndex = Math.floor(Math.random() * jokesLength)
        // const randomJoke = jokes[randomIndex] 
        
        // const jokeParagraph = document.querySelector('#joke-paragraph')

        // if (randomJoke) {
        //   jokeParagraph.textContent = randomJoke.value
        // } else {
        //   jokeParagraph.textContent = `No jokes found with phrase '${searchPhrase}' :(`
        // }

    //   })

    const res = await fetch(fetchUrl)
    const data = await res.json()

    const jokes = data.result
    const jokesLength = jokes.length
    const randomIndex = Math.floor(Math.random() * jokesLength)
    const randomJoke = jokes[randomIndex] 
    
    const jokeParagraph = document.querySelector('#joke-paragraph')

    if (randomJoke) {
      jokeParagraph.textContent = randomJoke.value
    } else {
      jokeParagraph.textContent = `No jokes found with phrase '${searchPhrase}' :(`
    }
  })
}

searchFormHandler()