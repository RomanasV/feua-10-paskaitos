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

// Kokia yra arčiausia Žemės esanti žvaigždė?
let correctAnswer11 = 'sun'

// Kiek yra 123 + 456
let correctAnswer12 = 579

let playerAnswer11 = 'sun'
let playerAnswer12 = 45646

console.log(correctAnswer11 === playerAnswer11)
console.log(correctAnswer12 === playerAnswer12)

console.log(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12)





let isLoggedIn = true
let userName = 'John'
let time = 5
let isBirthday = false