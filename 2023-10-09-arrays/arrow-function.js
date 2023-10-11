// Įprasta funkcija
function func1() {
  return 2 + 2
}
console.log(func1())

// Įprasta funkcija su parametrais
function func2(num1, num2) {
  return num1 + num2
}
console.log(func2(5, 5))

// Sukuriamas kintamasis ir jam, kaip reikšmė, priskiriama anoniminė funkcija
const func3 = function(num1, num2) {
  return num1 + num2
}
console.log(func3(6, 6))

// ARROW FUNCTION:
// 1. Sukurti kintamąjį
// 2. Priskirti reikšmę:
// 2.1. Paprasti skliaustai ()
// 2.2. Rodyklė =>
// 2.3. Riestiniai skliaustai {}

const arrowFunc1 = () => {
  return 2 * 2
}
console.log(arrowFunc1())

const arrowFunc2 = (num1, num2) => {
  return num1 * num2
}
console.log(arrowFunc2(3, 3))

const arrowFunc3 = (num) => {
  return num * num
}
console.log(arrowFunc3(5))

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.

const arrowFunc4 = num => {
  return num * num
}
console.log(arrowFunc4(5))

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.

const arrowFunc5 = num => num * num
console.log(arrowFunc5(5))


// FILTER
let nums = [1, 3, 5, 7, 9, 15]

// Filter su įprasta funkcija
// const filteredNums = nums.filter(function(num) {
//   return num > 5
// })
// console.log(filteredNums)

// Filter perdaryta į arrow funkciją
// const filteredNums = nums.filter((num) => {
//   return num > 5
// })
// console.log(filteredNums)

const filteredNums = nums.filter(num => num > 5)
console.log(filteredNums)