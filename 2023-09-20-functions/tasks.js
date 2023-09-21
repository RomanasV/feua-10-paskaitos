// Sukurti žemiau nurodytas funkcijas:

// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7
  // let output = humanYears + ' žmogaus metai yra ' + dogYears + ' šuns metai.'
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`

  console.log(output)
}

humanToDogYears(15)
humanToDogYears(10)

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function daysPerBook(books) {
  let days = Math.floor(365 / books)
  let output = `Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${days} dienas.`

  console.log(output)
}

daysPerBook(9)
daysPerBook(24)
// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną parametrą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks(days) {
  let weeks = (days / 7).toFixed(1)
  let output = `${days} dienos yra ${weeks} savaitės.`

  console.log(output)
}

daysToWeeks(10)

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną parametrą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function daysToYears(days) {
  let years = (days / 365).toFixed(2)
  let output = `${days} dienos yra ${years} metai.`

  console.log(output)
}

daysToYears(30)

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną parametrą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years) {
  let hours = years * 365 * 24
  let output = `${years} metai turi ${hours} valandas.`
  
  console.log(output)
}

yearsToHours(2)

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
  let hours = months * 30 * 24
  let output = `${months} mėnesiai turi ${hours} valandas.`

  console.log(output)
}

monthsToHours(4)

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną parametrą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
  let minutes = months * 30 * 24 * 60
  let output = `${months} mėnesiai turi ${minutes} minutes.`

  console.log(output)
}

monthsToMinutes(3)