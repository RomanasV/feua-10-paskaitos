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



let password = 'fjkshdkljshkfj'
console.log(password)
console.log(password.length)

// let age = prompt('Iveskite savo amziu')
let age = 45
console.log(age)