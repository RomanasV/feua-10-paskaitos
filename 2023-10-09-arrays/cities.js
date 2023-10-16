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
}

styleCities()