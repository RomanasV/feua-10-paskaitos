async function init() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await res.json()

  const breeds = data.message

  // for ..in
  for (const breed in breeds) {
    console.log(breed)
  }

  // Object.entries
  // const breedEntries = Object.entries(breeds)
  // breedEntries.forEach(entry => {
  //   const mainBreed = entry[0]
  //   const subBreeds = entry[1]
  //   console.log(mainBreed)
  // })

  // Object.keys
  // const breedKeys = Object.keys(breeds)
  // breedKeys.forEach(breed => {
  //   console.log(breed)
  // })

  // Obect.values
  // const breedValues = Object.values(breeds)
  // console.log(breedValues)
}

init()