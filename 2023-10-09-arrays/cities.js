const cities = [
  {
    name: 'Vilnius',
    population: 500000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['Gedimino pilis', 'antra', 'trecia'],
    isCapital: true,
  },
  {
    name: 'Riga',
    population: 300000,
    location: {
      continent: 'Europe',
      country: 'Latvia',
    },
    touristAttractions: ['Gedimino pilis', 'antra', 'trecia'],
    isCapital: false,
  },
  {
    name: 'Paris',
    population: 5000000,
    location: {
      continent: 'Europe',
      country: 'France',
    },
    touristAttractions: [],
    isCapital: true,
  },
]

function renderCities() {
  const citiesList = document.querySelector('#cities-list')

  cities.forEach((city) => {
    console.log(city)
    console.log(city.name)
    console.log(city.population)
    console.log(city.isCapital)
    console.log(city.location)
    console.log(city.location.continent)
    console.log(city.location.country)
  
    console.log(city.touristAttractions)
    console.log(city.touristAttractions.length)
  
    city.touristAttractions.forEach(attraction => {
      console.log(attraction)
    })

    const cityWrapper = document.createElement('div')
    cityWrapper.classList.add('city-wrapper')

    let capitalTitle = ''

    if (city.isCapital) {
      cityWrapper.classList.add('capital')
      capitalTitle = ' (capital)'
    }
  
    const cityTitle = document.createElement('h2')
    cityTitle.textContent = city.name + capitalTitle
  
    const cityDescription = document.createElement('p')
    cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.`
  
    cityWrapper.append(cityTitle, cityDescription)
  
    citiesList.append(cityWrapper)
  })
}

renderCities()

function styleCities() {
  const citiesCapitals = document.querySelectorAll('.capital h2')
  
  citiesCapitals.forEach((capitalTitle) => {
    capitalTitle.style.color = 'red'
  })
}

styleCities()