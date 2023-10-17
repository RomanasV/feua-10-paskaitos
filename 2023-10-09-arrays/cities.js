const cities = [
  {
    name: 'Vilnius',
    population: 500000,
    location: {
        continent: 'Europe',
        country: 'Lietuva',
    },
    touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
    isCapital: true,
},
{
    name: 'New York',
    population: 8500000,
    location: {
        continent: 'North America',
        country: 'United States',
    },
    touristAttractions: [],
    isCapital: false,
},
{
    name: 'Tokyo',
    population: 14000000,
    location: {
        continent: 'Asia',
        country: 'Japan',
    },
    touristAttractions: ['Sensō-ji'],
    isCapital: true,
},
{
    name: 'Amsterdam',
    population: 1400000,
    location: {
        continent: 'Europe',
        country: 'Netherlands',
    },
    touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
    isCapital: true,
},
{
    name: 'Monaco',
    population: 40000,
    location: {
        continent: 'Europe',
        country: 'Monaco',
    },
    touristAttractions: [],
    isCapital: true,
},
{
    name: 'Havana',
    population: 2400000,
    location: {
        continent: 'North America',
        country: 'Cuba',
    },
    touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
    isCapital: true,
},
{
    name: 'Singapore',
    population: 5600000,
    location: {
        continent: 'Asia',
        country: 'Singapore',
    },
    touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
    isCapital: true,
  },
  {
    name: 'Melbourne',
    population: 5000000,
    location: {
        continent: 'Australia',
        country: 'Australia',
    },
    touristAttractions: ['Melbourne Skydeck'],
    isCapital: false,
  },
  // {
  //     name: 'Sapporo',
  //     population: 1900000,
  //     location: {
  //         continent: 'Asia',
  //         country: 'Japan',
  //     },
  //     touristAttractions: ['Hokkaido Jingu'],
  //     isCapital: false,
  // },
  {
      name: 'Miami',
      population: 400000,
      location: {
          continent: 'North America',
          country: 'United States',
      },
      touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
      isCapital: false,
  },
]

function renderCities() {
  const citiesList = document.querySelector('#cities-list')

  cities.forEach((city) => {
    const cityWrapper = document.createElement('div')
    cityWrapper.classList.add('city-wrapper')

    let capitalTitle = ''
    let capitalDescription = ''

    if (city.isCapital) {
      cityWrapper.classList.add('capital')
      capitalTitle = ' (capital)'
      capitalDescription = ` ${city.name} is the capital of ${city.location.country}.`
    }
  
    const cityTitle = document.createElement('h2')
    cityTitle.textContent = city.name + capitalTitle
  
    const cityDescription = document.createElement('p')
    cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalDescription}`
  
    cityWrapper.append(cityTitle, cityDescription)

    if (city.touristAttractions.length > 0) {
      const touristAttractionsWrapper = document.createElement('div')
      touristAttractionsWrapper.classList.add('tourist-attractions-list')
  
      const touristAttractionsTitle = document.createElement('h3')
  
      if (city.touristAttractions.length > 1) {
        touristAttractionsTitle.textContent = `Tourist attractions of ${city.name} are:`
      } else {
        touristAttractionsTitle.textContent = `Tourist attraction of ${city.name} is:`
      }
  
      const touristAttractionsList = document.createElement('ul')
  
      city.touristAttractions.forEach(attraction => {
        const touristAttractionItem = document.createElement('li')
        touristAttractionItem.textContent = attraction
  
        touristAttractionsList.append(touristAttractionItem)
      })
  
      touristAttractionsWrapper.append(touristAttractionsTitle, touristAttractionsList)
  
      cityWrapper.append(touristAttractionsWrapper)
    }

    citiesList.append(cityWrapper)
  })
}

renderCities()

function styleCities() {
  const citiesCapitals = document.querySelectorAll('.capital h2')

  citiesCapitals.forEach((capitalTitle) => {
    capitalTitle.style.color = 'red'
  })

  // const oddCities = document.querySelectorAll('.city-wrapper:nth-of-type(odd)')
  // oddCities.forEach(city => {
  //   city.style.backgroundColor = '#f0f0f0'
  // })

  const allCities = document.querySelectorAll('.city-wrapper')

  // allCities.forEach((city, index) => {
  //   if (index % 2 === 0) {
  //     city.style.backgroundColor = '#f0f0f0'
  //   }
  // })

  for (let i = 0; i < allCities.length; i += 2) {
    allCities[i].style.backgroundColor = '#f0f0f0'
  }

  // const firstAttractionElements = document.querySelectorAll('li:first-of-type')
  // firstAttractionElements.forEach(element => {
  //   element.style.color = 'green'
  // })

  // const lastAttractionElements = document.querySelectorAll('li:nth-of-type(1n + 4)')
  // lastAttractionElements.forEach(element => {
  //   element.style.color = 'red'
  // })

  const touristAttractionLists = document.querySelectorAll('.tourist-attractions-list ul')
  touristAttractionLists.forEach(ulElement => {
    const liElements = ulElement.querySelectorAll('li')
    liElements.forEach((liElement, index) => {
      if (index === 0) {
        liElement.style.color = 'green'
      } else if (index > 2) {
        liElement.style.color = 'red'
      } else {
        liElement.style.color = 'orange'
      }
    })
  })

  const citiesList = document.querySelector('#cities-list')
  // citiesList.style.display = 'flex'
  // citiesList.style.flexWrap = 'wrap'
  // citiesList.style.gap = '20px'

  citiesList.style = `display: flex;
                      flex-wrap: wrap;
                      gap: 20px;`

  allCities.forEach((city, index) => {
    console.log(index, city)
    city.style.padding = '15px'
    city.style.boxSizing = 'border-box'
    
    if (index === allCities.length - 1 && index % 2 === 0) {
      city.style.width = '100%'
    } else {
      city.style.width = 'calc((100% - 20px) / 2)'
    }
  })
}

styleCities()