console.groupCollapsed('Basics / Strings')

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = 'John' // String (tekstas) duomenų tipas
let pavarde = "Doe" // String (tekstas) duomenų tipas
let miestas = `Kaunas` // String (tekstas) duomenų tipas
let amzius = 30 // Number (skaičius) duomenų tipas
let yraStudentas = false // Boolean (true/false) duomenų tipas
const asmensKodas = 345487845454 // Number (skaičius) duomenų tipas

console.log(vardas)
console.log(pavarde)
console.log(miestas)
console.log(amzius)
console.log(yraStudentas)
console.log(asmensKodas)

amzius = 31
console.log(amzius)

vardas = 'John'
console.log(vardas)

console.log(vardas, typeof vardas)
console.log(pavarde, typeof pavarde)
console.log(amzius, typeof amzius)
console.log(yraStudentas, typeof yraStudentas)


console.log('Hello, ' + vardas + ' ' + pavarde + '.')
console.log("Hello, " + vardas + " " + pavarde + ".")
console.log(`Hello, ${vardas} ${pavarde}.`)

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log('John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.')

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')
console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".")
console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)

// John said: "Good morning".
console.log('John said: "Good morning".')
console.log(`John said: "Good morning".`)

console.log("John said: \"Good morning\".")

// That's my car.
console.log("That's my car.")
console.log(`That's my car.`)

console.log('That\'s my car.')

// John said: "That's my car".
console.log(`John said: "That's my car".`)
console.log('John said: "That' + "'s my car" + '".')

console.log('John said: "That\'s my car".')
console.log("John said: \"That's my car\".")

// John `said`: "That's my car".
console.log('John `said`: "That\'s my car".')
console.log("John `said`: \"That's my car\".")
console.log(`John \`said\`: "That's my car".`)

// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".')
console.log("John \\`said\\`: \"That's my car\".")
console.log(`John \\\`said\\\`: "That's my car".`)

let sentence = 'Lorem ipsum dolor SIT amet consectetur adipisicing elit.'

console.log(sentence)
console.log(sentence.length)
console.log(sentence[6])
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
console.log(sentence.replaceAll('i', 'o'))

console.log('labas'.length)
console.log('labas'[2])
console.log('labas'.toUpperCase())

console.groupEnd()

console.groupCollapsed('Math Operators')
// Matematiniai operatoriai
let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 % num2)

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(num1 + num3)
console.log(num1 - num3)
console.log(num1 * num3)
console.log(num1 / num3)
console.log(num1 % num3)

console.log(num1 + num3 * num3)
console.log(22 + '10' * '10')
console.log(22 + 100)
console.log(122)

console.log((num1 + num3) * num3)
console.log((22 + '10') * '10')
console.log('2210' * '10')
console.log(22100)

console.groupEnd()

console.groupCollapsed('Statements')

// SĄLYGOS
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10 == 10) // true
console.log('vienas' == 'vienas') // true
console.log('10' == '10') // true
console.log(10 == '10') // true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10) // true
console.log('vienas' === 'vienas') // true
console.log('10' === '10') // true
console.log(10 === '10') // false

console.log(10 > 10) // false
console.log(10 < 10) // false
console.log(10 >= 10) // true
console.log(10 <= 10) // true

console.log(10 == 10) // true
console.log(10 != 10) // false

console.log(10 === 10) // true
console.log(10 !== 10) // false

console.log(true)
console.log(!true)
console.log(!!true)

// IF, ELSE IF, ELSE
let originalLight = 'GREEN'
let light = originalLight.toLowerCase()

console.log(light)

if (light === 'green') {
  console.log('Galima eiti')
} else if (light === 'yellow') {
  console.log('Pasiruošk')
} else if (light === 'red') {
  console.log('STOP')
} else {
  console.log('Sugedo :(')
}


let word = 'town'
console.log(word)
console.log(word[0])
console.log(word[1])
console.log(word[2])
console.log(word[3])

let firstLetter = word[0]
let thirdLetter = word[2]

// AND operator - &&

// Žodis: town
console.log(firstLetter === 't' && thirdLetter === 'e')
console.log('t' === 't' && thirdLetter === 'e')
console.log(true && thirdLetter === 'e')
console.log(true && 'w' === 'e')
console.log(true && false)
console.log(false)

// Žodis: tree
console.log(firstLetter === 't' && thirdLetter === 'e')
console.log('t' === 't' && thirdLetter === 'e')
console.log(true && thirdLetter === 'e')
console.log(true && 'e' === 'e')
console.log(true && true)
console.log(true)

// Žodis: freedom
console.log(firstLetter === 't' && thirdLetter === 'e')
console.log('f' === 't' && thirdLetter === 'e')
console.log(false && thirdLetter === 'e')
console.log(false)

// if (firstLetter === 't' && thirdLetter === 'e') {
//   console.log('Pirma raidė yra t ir trečia raidė yra e')
// } else {
//   console.log('Pirma raidė nėra t arba trečia raidė nėra e')
// }


// OR operator - ||

// Žodis: town
console.log(firstLetter === 't' || thirdLetter === 'e')
console.log('t' === 't' || thirdLetter === 'e')
console.log(true || thirdLetter === 'e')
console.log(true)

// Žodis: tree
console.log(firstLetter === 't' || thirdLetter === 'e')
console.log('t' === 't' || thirdLetter === 'e')
console.log(true || thirdLetter === 'e')
console.log(true)

// Žodis: freedom
console.log(firstLetter === 't' || thirdLetter === 'e')
console.log('f' === 't' || thirdLetter === 'e')
console.log(false || thirdLetter === 'e')
console.log(false || 'e' === 'e')
console.log(false || true)
console.log(true)

// Žodis: house
console.log(firstLetter === 't' || thirdLetter === 'e')
console.log('h' === 't' || thirdLetter === 'e')
console.log(false || thirdLetter === 'e')
console.log(false || 'u' === 'e')
console.log(false || false)
console.log(false)

// console.log((firstLetter === 't' || thirdLetter === 'e') && (secondLetter === 'o' || fourthLetter === 'm'))
// console.log((false || true) && (secondLetter === 'o' || fourthLetter === 'm'))
// console.log(true && (secondLetter === 'o' || fourthLetter === 'm'))
// console.log(true && (false || false))
// console.log(true && false)
// console.log(false)


let personAge = 17
console.log(personAge)

if (personAge >= 18) {
  console.log('Pirkti galima')
} else {
  console.log('Pirkti negalima')
}

if (personAge < 18) {
  console.log('Pirkti negalima')
} else {
  console.log('Pirkti galima')
}


if (personAge > 17) {
  console.log('Pirkti galima')
} else {
  console.log('Pirkti negalima')
}

if (personAge <= 17) {
  console.log('Pirkti negalima')
} else {
  console.log('Pirkti galima')
}


personAge = 17

// if (personAge >= 18) {
//   console.log('Pirkti galima')
// } else if (personAge < 18 && personAge >= 16) {
//   console.log('Pirkti galima su tėvų sutikimu')
// } else {
//   console.log('Pirkti negalima')
// }

if (personAge >= 18) {
  console.log('Pirkti galima')
} else if (personAge >= 16) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti negalima')
}

if (personAge < 16) {
  console.log('Pirkti negalima')
} else if (personAge < 18) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti galima')
}

if (personAge > 17) {
  console.log('Pirkti galima')
} else if (personAge > 15) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti negalima')
}

if (personAge <= 15) {
  console.log('Pirkti negalima')
} else if (personAge <= 17) {
  console.log('Pirkti galima su tėvų sutikimu')
} else {
  console.log('Pirkti galima')
}

// NESTING
personAge = 15

if (personAge < 16) {
  console.log('Pirkti galima')
} else {

  // if (personAge >= 18) {
  //   console.log('Pirkti negalima')
  // } else {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // }

  if (personAge < 18) {
    console.log('Pirkti galima su tėvų sutikimu')
  } else {
    console.log('Pirkti negalima')
  }
}

if (personAge >= 16) {
  // if (personAge >= 18) {
  //   console.log('Pirkti negalima')
  // } else {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // }

  if (personAge < 18) {
    console.log('Pirkti galima su tėvų sutikimu')
  } else {
    console.log('Pirkti negalima')
  }

} else {
  console.log('Pirkti negalima')
}

if (personAge >= 18) {
  console.log('Pirkti negalima')
} else {
  
  // if (personAge >= 16) {
  //   console.log('Pirkti galima su tėvų sutikimu')
  // } else {
  //   console.log('Pirkti negalima')
  // }

  if (personAge < 16) {
    console.log('Pirkti negalima')
  } else {
    console.log('Pirkti galima su tėvų sutikimu')
  }

}

console.groupEnd()
console.groupCollapsed('Tasks 1')

// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

let originalPassword = 'asdasdasgdfgdfgdg#'
let password = originalPassword.trim()
let passwordLength = password.length

console.log(password)
console.log(passwordLength)
console.log(password.includes('#'))

// if (password.includes('#')) {
//   if (passwordLength < 16) {
//     console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
//   } else {
    
//     // if (passwordLength >= 21) {
//     //   console.log('Slaptažodis tinkamas')
//     // } else {
//       //   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//       // }
      
//     if (passwordLength < 21) {
//       console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//     } else {
//       console.log('Slaptažodis tinkamas')
//     }
  
//   }
// } else {
//   console.log('Slaptažodis privalo turėti grotažymes')
// }



// if (!password.includes('#')) {
//   console.log('Slaptažodis privalo turėti grotažymes')
// } else if (passwordLength < 16) {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
// } else {
  
//   if (passwordLength < 21) {
//     console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//   } else {
//     console.log('Slaptažodis tinkamas')
//   }

// }


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
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

let age = 19
console.log(age)

// if (age < 0) {
//   console.log('Nurodytas amžius yra per mažas, jis negali būti neigiamas skaičius.')
// } else if (age >= 120) {
//   console.log('Nurodytas amžius yra per didelis, jis negali būti didesnis už 120 metų.')
// } else if (age < 7) {
//   console.log('Į mokyklą neina')
// } else if (age < 11) {
//   console.log('Pradinė')
// } else if (age < 15) {
//   console.log('Pagrindinė')
// } else if (age < 19) {
//   console.log('Gimnazija')
// } else {
//   console.log('Mokyklą baigė')
// }

// age = prompt('Iveskite savo amziu')
age = 20

console.log(age)
console.log(typeof age)

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

console.groupEnd()

// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// Kokia yra arčiausia Žemės esanti žvaigždė?
let correctAnswer11 = 'sun'

// Kiek yra 123 + 456
let correctAnswer12 = 579

let playerAnswer11 = 'moon'
let playerAnswer12 = 579

// if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log('Patekai i kita lygi: abu atsakymai teisingi.')
// } else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
// } else if (correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12) {
//   console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
// } else {
//   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
// }

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
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

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

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// 1 1 1 +
// 1 1 0 +
// 1 0 1 +
// 0 1 1 +
// 1 0 0 +
// 0 1 0 +
// 0 0 1 +
// 0 0 0 +

// let correctAnswer31 = 1
// let correctAnswer32 = 1
// let correctAnswer33 = 1

// let playerAnswer31 = 0
// let playerAnswer32 = 0
// let playerAnswer33 = 0

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai i kita lygi: visi atsakymai teisingi.')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Patekai i kita lygi: tačiau trečias atsakymas buvo neteisingas.')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai i kita lygi: tačiau antras atsakymas buvo neteisingas.')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai i kita lygi: tačiau pirmas atsakymas buvo neteisingas.')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Nepatekai i kita lygi: tačiau pirmas atsakymas buvo teisingas.')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
//   console.log('Nepatekai i kita lygi: tačiau antras atsakymas buvo teisingas.')
// } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Nepatekai i kita lygi: tačiau trečias atsakymas buvo teisingas.')
// } else {
//   console.log('Nepatekai i kita lygi: visi atsakymai buvo neteisingi.')
// }

// if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai i kita lygi: visi atsakymai teisingi.')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32) {
//   console.log('Patekai i kita lygi: tačiau trečias atsakymas buvo neteisingas.')
// } else if (correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai i kita lygi: tačiau antras atsakymas buvo neteisingas.')
// } else if (correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
//   console.log('Patekai i kita lygi: tačiau pirmas atsakymas buvo neteisingas.')
// } else if (correctAnswer31 === playerAnswer31) {
//   console.log('Nepatekai i kita lygi: tačiau pirmas atsakymas buvo teisingas.')
// } else if (correctAnswer32 === playerAnswer32) {
//   console.log('Nepatekai i kita lygi: tačiau antras atsakymas buvo teisingas.')
// } else if (correctAnswer33 === playerAnswer33) {
//   console.log('Nepatekai i kita lygi: tačiau trečias atsakymas buvo teisingas.')
// } else {
//   console.log('Nepatekai i kita lygi: visi atsakymai buvo neteisingi.')
// }


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



// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"


// let isLoggedIn = true
// let userName = 'John'
// let time = 18
// let isBirthday = false

// if (isLoggedIn === true) {
  
//   if (time >= 5 && time < 13) {

//     if (isBirthday === true) {
//       console.log(`Good Morning, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Good Morning, ${userName}.`)
//     }

//   } else if (time >= 13 && time < 19) {

//     if (isBirthday === true) {
//       console.log(`Good Afternoon, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Good Afternoon, ${userName}.`)
//     }

//   } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

//     if (isBirthday === true) {
//       console.log(`Good Evening, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Good Evening, ${userName}.`)
//     }

//   } else {
    
//     if (isBirthday === true) {
//       console.log(`Hello, ${userName} and have a great birthday!`)
//     } else {
//       console.log(`Hello, ${userName}.`)
//     }

//   }

// } else {
  
//   if (time >= 5 && time < 13) {
//     console.log(`Good Morning`)
//   } else if (time >= 13 && time < 19) {
//     console.log(`Good Afternoon`)
//   } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
//     console.log(`Good Evening`)
//   } else {
//     console.log(`Hello`)
//   }

// }

// if (time >= 5 && time < 13) {
  
//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Good Morning, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Good Morning, ${userName}`)
//   } else {
//     console.log(`Good Morning`)
//   }

// } else if (time >= 13 && time < 19) {

//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Good Afternoon, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Good Afternoon, ${userName}`)
//   } else {
//     console.log(`Good Afternoon`)
//   }

// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Good Evening, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Good Evening, ${userName}`)
//   } else {
//     console.log(`Good Evening`)
//   }

// } else {

//   if (isLoggedIn === true && isBirthday === true) {
//     console.log(`Hello, ${userName} and have a great birthday!`)
//   } else if (isLoggedIn === true) {
//     console.log(`Hello, ${userName}`)
//   } else {
//     console.log(`Hello`)
//   }

// }









// let isLoggedIn = true
// let userName = 'Steve'
// let time = 20
// let isBirthday = false

// let greetingText = ''
// let nameText = ''
// let birthdayText = ''

// if (time >= 5 && time < 13) {
//   greetingText = 'Good Morning'
// } else if (time >= 13 && time < 19) {
//   greetingText = 'Good Afternoon'
// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
//   greetingText = 'Good Evening'
// } else {
//   greetingText = 'Hello'
// }

// if (isLoggedIn && userName) {
//   nameText = ', ' + userName
// }

// if (isBirthday && isLoggedIn) {
//   birthdayText = ' and have a great birthday!'
// }

// let greetingOutput = greetingText + nameText + birthdayText

// console.log(greetingOutput)



let isLoggedIn = true
let userName = 'Steve'
let time = 20
let isBirthday = false

let greetingText = ''

// let nameText
// if (isLoggedIn && userName) {
//   nameText = ', ' + userName
// } else {
//   nameText = ''
// }

let nameText = (isLoggedIn && userName) ? ', ' + userName : ''

// let birthdayText
// if (isBirthday && isLoggedIn) {
//   birthdayText = ' and have a great birthday!'
// } else {
//   birthdayText = ''
// }

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