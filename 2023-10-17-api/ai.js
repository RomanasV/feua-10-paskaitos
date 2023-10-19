function init() {
  const nameForm = document.querySelector('#name-form')
  const outputParagraph = document.querySelector('#output-paragraph')

  nameForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    outputParagraph.textContent = ''

    const enteredName = event.target.name.value

    // PIRMAS BŪDAS
    // fetch(`https://api.agify.io?name=${enteredName}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const age = data.age
    //     const output = `${enteredName} is ${age} years old. `

    //     outputParagraph.textContent += output
    //   })

    // fetch(`https://api.nationalize.io?name=${enteredName}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const country = data.country[0].country_id
    //     const output = `${enteredName} is from ${country}. `

    //     outputParagraph.textContent += output
    //   })

    // ANTRAS BŪDAS
    // fetch(`https://api.agify.io?name=${enteredName}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const age = data.age
    //     const ageOutput = `${enteredName} is ${age} years old. `

    //     fetch(`https://api.nationalize.io?name=${enteredName}`)
    //       .then(res => res.json())
    //       .then(data => {
    //         const country = data.country[0].country_id
    //         const countryOutput = `${enteredName} is from ${country}. `

    //         fetch(`https://api.genderize.io?name=${enteredName}`)
    //           .then(res => res.json())
    //           .then(data => {
    //             const gender = data.gender
    //             const genderOutput = `${enteredName} is ${gender}. `
    
    //             outputParagraph.textContent = ageOutput + countryOutput + genderOutput
    //           })
    //       })
    //   })

    // TREČIAS BŪDAS
    // const ageRes = await fetch(`https://api.agify.io?name=${enteredName}`)
    // const countryRes = await fetch(`https://api.nationalize.io?name=${enteredName}`)
    // const genderRes = await fetch(`https://api.genderize.io?name=${enteredName}`)
    
    // const ageData = await ageRes.json()
    // const countryData = await countryRes.json()
    // const genderData = await genderRes.json()
    
    // const age = ageData.age
    // const country = countryData.country[0].country_id
    // const gender = genderData.gender

    // const ageOutput = `${enteredName} is ${age} years old. `
    // const countryOutput = `${enteredName} is from ${country}. `
    // const genderOutput = `${enteredName} is ${gender}. `
    
    // outputParagraph.textContent = ageOutput + countryOutput + genderOutput

    // KETVIRTAS BŪDAS
    const age = await getAge(enteredName)
    const country = await getCountry(enteredName)
    const gender = await getGender(enteredName)

    const ageOutput = `${enteredName} is ${age} years old.`
    const countryOutput = `${enteredName} is from ${country}.`
    const genderOutput = `${enteredName} is ${gender}.`
    
    outputParagraph.textContent = `${ageOutput} ${countryOutput} ${genderOutput}`
  })
}

init()

async function getAge(name) {
  const res = await fetch(`https://api.agify.io?name=${name}`)
  const data = await res.json()

  const age = data.age
  return age
}

async function getCountry(name) {
  const res = await fetch(`https://api.nationalize.io?name=${name}`)
  const data = await res.json()

  const country = data.country[0].country_id
  return country
}

async function getGender(name) {
  const res = await fetch(`https://api.genderize.io?name=${name}`)
  const data = await res.json()

  const gender = data.gender
  return gender
}