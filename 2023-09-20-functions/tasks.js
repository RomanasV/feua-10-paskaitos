// Sukurti žemiau nurodytas funkcijas:

// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7
  // let output = humanYears + ' žmogaus metai yra ' + dogYears + ' šuns metai.'
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`

 return output
}

console.log(humanToDogYears(15))
console.log(humanToDogYears(10))

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function daysPerBook(books) {
  let days = Math.floor(365 / books)
  let output = `Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${days} dienas.`

  return output
}

console.log(daysPerBook(9))
console.log(daysPerBook(24))

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną parametrą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks(days) {
  let weeks = (days / 7).toFixed(1)
  let output = `${days} dienos yra ${weeks} savaitės.`

  return output
}

console.log(daysToWeeks(10))

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną parametrą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let years = (days / 365).toFixed(2)
  let output = `${days} dienos yra ${years} metai.`

  return output
}

console.log(daysToYears(30))

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną parametrą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
  let hours = years * 365 * 24
  let output = `${years} metai turi ${hours} valandas.`
  
  return output
}

console.log(yearsToHours(2))

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
  let hours = months * 30 * 24
  let output = `${months} mėnesiai turi ${hours} valandas.`

  return output
}

console.log(monthsToHours(4))

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
  let minutes = months * 30 * 24 * 60
  let output = `${months} mėnesiai turi ${minutes} minutes.`

  return output
}

console.log(monthsToMinutes(3))


// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du parametrą: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

// function convertDays(days, format) {
//   if (!days || !format) {
//     return 'Error: blogai nurodyti duomenys'
//   }

//   if (format === 'minutes') {
//     let minutes = days * 24 * 60
//     return `${days} days - ${minutes} minutes`
//   }

//   if (format === 'hours') {
//     let hours = days * 24
//     return `${days} days - ${hours} hours`
//   }

//   if (format === 'weeks') {
//     let weeks = (days / 7).toFixed(1)
//     return `${days} days - ${weeks} weeks`
//   }

//   if (format === 'months') {
//     let months = (days / 30).toFixed(1)
//     return `${days} days - ${months} months`
//   }

//   if (format === 'years') {
//     let years = (days / 365).toFixed(2)
//     return `${days} days - ${years} years`
//   }

//   return 'ERROR: neteisingai nurodytas formatas.'
// }

// function convertDays(days, format) {
//   if (!days || !format) {
//     return 'Error: blogai nurodyti duomenys'
//   }

//   let answer

//   if (format === 'minutes') {
//     answer = days * 24 * 60
//   } else if (format === 'hours') {
//     answer = days * 24
//   } else if (format === 'weeks') {
//     answer = (days / 7).toFixed(1)
//   } else if (format === 'months') {
//     answer = (days / 30).toFixed(1)
//   } else if (format === 'years') {
//     answer = (days / 365).toFixed(2)
//   } else {
//     return 'ERROR: neteisingai nurodytas formatas.'
//   }

//   return `${days} days - ${answer} ${format}`
// }

function convertDays(days, format) {
  if (!days || !format) {
    return 'Error: blogai nurodyti duomenys'
  }

  let answer

  switch (format) {
    case 'minutes':
      answer = days * 24 * 60
      break
    case 'hours':
      answer = days * 24
      break
    case 'weeks':
      answer = (days / 7).toFixed(1)
      break
    case 'months':
      answer = (days / 30).toFixed(1)
      break
    case 'years':
      answer = (days / 365).toFixed(2)
      break
    default:
      return 'ERROR: neteisingai nurodytas formatas.'
  }

  return `${days} days - ${answer} ${format}`
}

console.log(convertDays(15, 'minutes'))
console.log(convertDays(15, 'hours'))
console.log(convertDays(15, 'weeks'))
console.log(convertDays(15, 'months'))
console.log(convertDays(15, 'years'))
console.log(convertDays(15, 'asdasdasd'))


// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du parametrus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.
 
function checkNumber(unit, divisor) {
  let answer = unit % divisor

  if (answer === 0) {
    return `${unit} dalinasi iš ${divisor}`
  }

  return `Skaičius ${unit} nesidalina iš ${divisor}. Liekana yra ${answer}`
}

console.log(checkNumber(10, 5))
console.log(checkNumber(11, 5))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function checkText(str) {
  if (typeof str !== 'string') {
    return 'ERROR: Įvesti duomenys privalo būti tekstas'
  }

  let strLength = str.length

  if (strLength % 2 === 0) {
    return `Tekstas '${str}' turi porini raidžių skaičių`
  }

  return `Tekstas '${str}' turi neporini raidžių skaičių` 
}

console.log(checkText('labas'))
console.log(checkText('sveikass'))
console.log(checkText())
console.log(checkText(4564654))

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du parametrą: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function getSymbol(str, num) {
  if (num === 0) {
    return 'ERROR: reikia įvesti teigiamą arba neigiamą skaičių. Nulis nėra galimas variantas.'
  }

  if (!str || !num) {
    return 'ERROR: neteisingai įvesti duomenys'
  }

  if (typeof str !== 'string') {
    return 'ERROR: pirmas parametras privalo būti tekstas (string).'
  }

  if (isNaN(num)) {
    return 'ERROR: antras parametras privalo būti skaičius (number).'
  }

  let strLength = str.length

  // let convertedNum = num
  // if (num < 0) {
  //   convertedNum = num * -1
  // }

  let convertedNum = num < 0 ? num : num * -1

  if (convertedNum > strLength) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum}`
  }

  if (num < 0) {
    let backSymbol = str.at(num)

    return `Teksto "${str}" ${convertedNum} simbolis skaičiuojant nuo galo yra "${backSymbol}"`
  }
  
  let index = num - 1
  // let symbol = str[index]
  // let symbol = str.charAt(index)
  let symbol = str.at(index)

  return `Teksto "${str}" ${num} simbolis yra "${symbol}".`
}

console.log(getSymbol('labas', 3))
console.log(getSymbol('labas', 5))
console.log(getSymbol('labas', 8))
console.log(getSymbol('labas', -8))
console.log(getSymbol('labas', -3))
console.log(getSymbol('labas'))
console.log(getSymbol(4, 5))
console.log(getSymbol('labas', 0))

