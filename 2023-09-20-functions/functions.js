function streetLight(originalLight) {
  let light = originalLight.toLowerCase()
  
  if (light === 'green') {
    console.log('Galima eiti')
  } else if (light === 'yellow') {
    console.log('Pasiruošk')
  } else if (light === 'red') {
    console.log('STOP')
  } else {
    console.log('Sugedo :(')
  }
}

streetLight('green')
streetLight('red')
streetLight('yellow')
streetLight('orange')



// SLAPTAŽODIS

let originalPassword = 'asdasdasgdfgdfgdg#'
let password = originalPassword.trim()
let passwordLength = password.length

if (!password.includes('#')) {
  console.log('Slaptažodis privalo turėti grotažymes')
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if (passwordLength < 21) {
  console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
  console.log('Slaptažodis tinkamas')
}



// AMŽIUS
let age = 20

if (isNaN(age)) {
  console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
  console.log('Nurodytas amžius yra per mažas, jis negali būti neigiamas skaičius.')
} else if (age < 6) {
  console.log('Į mokyklą neina')
} else if (age < 7) {
  console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
  console.log('Pradinė')
} else if (age < 11) {
  console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
  console.log('Pagrindinė')
} else if (age < 15) {
  console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
  console.log('Gimnazija')
} else if (age < 19) {
  console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age < 120) {
  console.log('Mokyklą baigė')
} else {
  console.log('Nurodytas amžius yra per didelis, jis negali būti didesnis už 120 metų.')
}



// PIRMAS LYGIS:
// Kokia yra arčiausia Žemės esanti žvaigždė?
let correctAnswer11 = 'sun'

// Kiek yra 123 + 456
let correctAnswer12 = 579

let playerAnswer11 = 'moon'
let playerAnswer12 = 579

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer12 === playerAnswer12) {
  console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer11 === playerAnswer11) {
  console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// ANTRAS LYGIS:
let correctAnswer21 = 1
let correctAnswer22 = 1

let playerAnswer21 = 1
let playerAnswer22 = 1

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// TREČIAS LYGIS 
let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

let playerAnswer31 = 1
let playerAnswer32 = 1
let playerAnswer33 = 0

let answer31 = correctAnswer31 === playerAnswer31
let answer32 = correctAnswer32 === playerAnswer32
let answer33 = correctAnswer33 === playerAnswer33

let successMessage = 'Patekai i kita lygi: '
let failMessage = 'Nepatekai i kita lygi: '

let output = ''

if (answer31 && answer32 && answer33) {
  output = successMessage + 'visi atsakymai teisingi.'
} else if (answer31 && answer32) {
  output = successMessage + 'tačiau trečias atsakymas buvo neteisingas.'
} else if (answer31 && answer33) {
  output = successMessage + 'tačiau antras atsakymas buvo neteisingas.'
} else if (answer32 && answer33) {
  output = successMessage + 'tačiau pirmas atsakymas buvo neteisingas.'
} else if (answer31) {
  output = failMessage + 'tačiau pirmas atsakymas buvo teisingas.'
} else if (answer32) {
  output = failMessage + 'tačiau antras atsakymas buvo teisingas.'
} else if (answer33) {
  output = failMessage + 'tačiau trečias atsakymas buvo teisingas.'
} else {
  output = failMessage + 'visi atsakymai buvo neteisingi.'
}

console.log(output)

// PASISVEIKINIMAS

let isLoggedIn = true
let userName = 'Steve'
let time = 20
let isBirthday = false

let greetingText = ''
let nameText = (isLoggedIn && userName) ? ', ' + userName : ''
let birthdayText = (isBirthday && isLoggedIn) ? ' and have a great birthday!' : ''

if (time >= 5 && time < 13) {
  greetingText = 'Good Morning'
} else if (time >= 13 && time < 19) {
  greetingText = 'Good Afternoon'
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingText = 'Good Evening'
} else {
  greetingText = 'Hello'
}

let greetingOutput = greetingText + nameText + birthdayText

console.log(greetingOutput)