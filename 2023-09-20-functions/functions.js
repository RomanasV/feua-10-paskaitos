function streetLight(originalLight) {
  if (!originalLight) {
    return 'Nenurodyti duomenys'
  }

  let light = originalLight.toLowerCase()
  
  // if (light === 'green') {
  //   return 'Galima eiti'
  // } else if (light === 'yellow') {
  //   return 'Pasiruošk'
  // } else if (light === 'red') {
  //   return 'STOP'
  // } else {
  //   return 'Sugedo :('
  // }
 
  if (light === 'green') {
    return 'Galima eiti'
  }
  
  if (light === 'yellow') {
    return 'Pasiruošk'
  }
  
  if (light === 'red') {
    return 'STOP'
  }
  
  return 'Sugedo :('
}

console.log(streetLight('green'))
console.log(streetLight('red'))
console.log(streetLight('yellow'))
console.log(streetLight('orange'))
console.log(streetLight())



// SLAPTAŽODIS

function checkPassword(originalPassword) {
  let password = originalPassword.trim()
  let passwordLength = password.length
  
  if (!password.includes('#')) {
    return 'Slaptažodis privalo turėti grotažymes'
  }
  
  if (passwordLength < 16) {
    return 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.'
  }
  
  if (passwordLength < 21) {
    return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.'
  }

  return 'Slaptažodis tinkamas'
}

console.log(checkPassword('asdasdhaskjhsdfj'))
console.log(checkPassword(';lk;lklklkjlkjljk'))
console.log(checkPassword('kjhskdjlfhk#fajksdhfksjhdf'))



// AMŽIUS

function checkAge(age) {
  if (isNaN(age)) {
    return 'Netinkamai nurodytas amžius, amžius privalo būti skaičius.'
  }
  
  if (age < 0) {
    return 'Nurodytas amžius yra per mažas, jis negali būti neigiamas skaičius.'
  }
  
  if (age < 6) {
    return 'Į mokyklą neina'
  }
  
  if (age < 7) {
    return 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.'
  }
  
  if (age < 10) {
    return 'Pradinė'
  }
  
  if (age < 11) {
    return 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.'
  }
  
  if (age < 14) {
    return 'Pagrindinė'
  }
  
  if (age < 15) {
    return 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.'
  }
  
  if (age < 18) {
    return 'Gimnazija'
  }
  
  if (age < 19) {
    return 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.'
  }
  
  if (age < 120) {
    return 'Mokyklą baigė'
  }
  
  return 'Nurodytas amžius yra per didelis, jis negali būti didesnis už 120 metų.'
}

console.log(checkAge(15))
console.log(checkAge(50))

// PIRMAS LYGIS:

function firstLevel() {
  // Kokia yra arčiausia Žemės esanti žvaigždė?
  let correctAnswer11 = 'sun'
  // Kiek yra 123 + 456
  let correctAnswer12 = 579

  let playerAnswer11 = prompt('Kokia yra arčiausia Žemės esanti žvaigždė?')
  let playerAnswer12 = prompt('Kiek yra 123 + 456')

  if (correctAnswer11 == playerAnswer11 && correctAnswer12 == playerAnswer12) {
    alert('Patekai i kita lygi: abu atsakymai teisingi.')
    secondLevel()
  } else if (correctAnswer12 == playerAnswer12) {
    alert('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
    secondLevel()
  } else if (correctAnswer11 == playerAnswer11) {
    alert('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
    secondLevel()
  } else {
    alert('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
  }
}

// firstLevel()


// ANTRAS LYGIS:
function secondLevel() {
  let correctAnswer21 = 1
  let correctAnswer22 = 1
  
  let playerAnswer21 = prompt('Antras lygis, pirmas klausimas')
  let playerAnswer22 = prompt('Antras lygis, antras klausimas')
  
  if (correctAnswer21 == playerAnswer21 && correctAnswer22 == playerAnswer22) {
    alert('Patekai i kita lygi: abu atsakymai teisingi.')
    thirdLevel()
  } else if (correctAnswer22 == playerAnswer22) {
    alert('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  } else if (correctAnswer21 == playerAnswer21) {
    alert('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
  } else {
    alert('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
  }
}

// TREČIAS LYGIS 
function thirdLevel() {
  let correctAnswer31 = 1
  let correctAnswer32 = 1
  let correctAnswer33 = 1
  
  let playerAnswer31 = prompt('Trecias lygis, pirmas klausimas')
  let playerAnswer32 = prompt('Trecias lygis, antras klausimas')
  let playerAnswer33 = prompt('Trecias lygis, trecias klausimas')
  
  let answer31 = correctAnswer31 == playerAnswer31
  let answer32 = correctAnswer32 == playerAnswer32
  let answer33 = correctAnswer33 == playerAnswer33
  
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
  
  alert(output)
}



// PASISVEIKINIMAS

function greeting(time, isLoggedIn, userName, isBirthday = false) {
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
  
  return greetingOutput
}

console.log(greeting(15, true, 'John', false))
console.log(greeting(8, true, 'Steve', true))
console.log(greeting(8, true, 'Steve'))
console.log(greeting(8, true))
console.log(greeting(8))