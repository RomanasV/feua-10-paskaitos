console.groupCollapsed('JSON')

const obj = {
  name: 'John',
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddress() {
    return `Address is ${this.address.street} ${this.address.city}, ${this.address.country}.`
  },
  test1: undefined,
  test2: null,
}

console.log(obj['name'])
console.log(obj.age)
console.log(obj.children[0])
console.log(obj.address.city)
console.log(obj.getAddress())

// Įprastas objektas
console.log(typeof obj, obj)

// Objektas paverčiamas į JSON objektą
const jsonObj = JSON.stringify(obj)
console.log(typeof jsonObj, jsonObj)

// JSON to obj
const convertedJson = JSON.parse(jsonObj)
console.log(typeof convertedJson, convertedJson)

console.groupEnd()

// fetch('obj.json')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })

// fetch('obj.json')
//   .then(response => response.json())
//   .then(obj => {
//     console.log(typeof obj, obj)
//     console.log(obj['name'])
//     console.log(obj.age)
//     console.log(obj.children[0])
//     console.log(obj.address.city)
//   })

function getJsonObj() {
  fetch('obj.json')
    .then(response => response.json())
    .then(obj => {
      console.log(typeof obj, obj)
    })
}

// getJsonObj()

async function getJsonObjAsync() {
  const response = await fetch('obj.json')
  const obj = await response.json()

  console.log(obj)
}

// getJsonObjAsync()

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