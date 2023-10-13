console.groupCollapsed('Masyvų teorija')

// Masyvai / arrays
const numsArray = [5, 500, -5, 57.5, 4534, 4444]
// Indeksai        0   1    2    3     4    5

console.log(numsArray)
console.log(numsArray.length)

// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])
// console.log(numsArray[4])
// console.log(numsArray[5])

for (let i = 0; i < numsArray.length; i++) {
  console.log(numsArray[i])
}

const newArr = ['Vienas', 'Du', 5, true, [1, 2, 5]]
// Indeksai        0       1    2    3       4
                                       // 0  1  2

console.log(newArr)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
console.log(newArr[3])
console.log(newArr[4])
console.log(newArr[4][0])
console.log(newArr[4][1])
console.log(newArr[4][2])

console.log(newArr[1])
newArr[1] = 200
console.log(newArr[1])

newArr[newArr.length] = 500
console.log(newArr)

console.log(typeof newArr)

const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
const lastCity = cities.pop()
console.log(lastCity)

cities.pop()

console.log(cities)

// shift() metodas - pašalina pirmą masyvo narį.
const firstCity = cities.shift()
console.log(firstCity)

cities.shift()

console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
const updatedCitiesLength = cities.push('Šiauliai')
console.log(updatedCitiesLength)

cities.push('Panevėžys')
cities.push('Vilnius', 'Kaunas')

console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
const updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Tauragė', 'Palanga')

console.log(cities)

const countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index                0          1         2          3         4         5
// Slice (+)      0           1         2         3         4          5        6
// Slice (-)     -6          -5        -4        -3        -2         -1      

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('------------SLICE-------------')
console.log(countries)

const slicedCountries1 = countries.slice()
console.log(slicedCountries1)
const slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)
const slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)
const slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)
const slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)
const slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)
const slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)
const slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)
const slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)
const slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)
const slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)
const slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)

console.groupEnd()

console.groupCollapsed('Pirmos užduoties 29 ir 30 dalies sprendimas')

const arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

// 1. Pirmi 5 nariai
const task229first = arr.slice(0, 5)
console.log(task229first)

// 2. Paskutiniai 6 nariai
const task229last = arr.slice(-6)
console.log(task229last)

// 3. Bendras masyvas
// const task229all = task229first.concat(task229last)
// const task229all = [task229first, task229last].flat()
const task229all = [...task229first, ...task229last]
console.log(task229all)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

const task230first = arr.slice(2, 5)
console.log(task230first)

const task230last = arr.slice(14, 17)
console.log(task230last)

// const task230all = task230first.concat(task230last)
// const task230all = [task230first, task230last].flat()
const task230all = [...task230first, ...task230last]
console.log(task230all)

console.groupEnd()

console.groupCollapsed()
// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [  1  ,   2  ,   3  ,   4  ,   5  ,   6  ,   7  ,   10];
//         0     1      2      3      4      5      6      7     8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// const splicedNums = nums.splice(2)
// const splicedNums = nums.splice(0, 2)
// const splicedNums = nums.splice(2, 1)
// const splicedNums = nums.splice(2, 3)
// const splicedNums = nums.splice(-1)
// const splicedNums = nums.splice(-3, 2)
// const splicedNums = nums.splice(-3, 2, 2)
// const splicedNums = nums.splice(3, 2, 'Trys')
// const splicedNums = nums.splice(2, 1, 2.5)
// const splicedNums = nums.splice(2, 0, 2.5)
const splicedNums = nums.splice(2, 0, 2.5, 2.7, 2.8)

console.log(splicedNums)
console.log(nums)


// FILTER
let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(originalNums);

// let filteredNums = []
// for (let i = 0; i < originalNums.length; i++) {
//   if (originalNums[i] > 5) {
//     filteredNums.push(originalNums[i])
//   }
// }
// console.log(filteredNums)

// const filteredNums = originalNums.filter(function(num, index, arr) {
//   console.log('Array: ', arr)
//   console.log('Index: ' + index)
//   console.log('Item: ' + num)
//   console.log(num > 5)

//   return num > 5
// })

const filteredNums = originalNums.filter(function(num){
  return num > 5
})
console.log(filteredNums)

const filteredNums2 = originalNums.filter(function(num){
  return num > 3 && num < 8
})
console.log(filteredNums2)

// const filteredNums3 = originalNums.filter((num) => {
//   return num >= 7 && num % 2 === 0
// })
const filteredNums3 = originalNums.filter(num => num >= 7 && num % 2 === 0)
console.log(filteredNums3)

// MAP
const numsArr = [1, 4, 9, 12]

for (let i = 0; i < numsArr.length; i++) {
  console.log('Index: ' + i)
  console.log('for ciklas: ' + numsArr[i])
}

// numsArr.map(function(num, index, originalArray) {
//   console.log('Index: ' + index)
//   console.log('Map ciklas: ' + num)
//   console.log('Original array: ', originalArray)
// })

numsArr.map((num, index, originalArray) => {
  console.log('Index: ' + index)
  console.log('Map ciklas: ' + num)
  console.log('Original array: ', originalArray)
})

numsArr.forEach((num, index, originalArray) => {
  console.log('Index: ' + index)
  console.log('ForEach ciklas: ' + num)
  console.log('Original array: ', originalArray)
})

// map - grąžina reikšmę
// forEach - negrąžina reikšmę

// const mapNums = numsArr.map((num) => {
//   return num * num
// })

const mapNums = numsArr.map(num => num * num).reverse()

console.log(numsArr)
console.log(mapNums)

const forEachNums = numsArr.forEach(num => num * num)

console.log(forEachNums)


let dataArr = ['text', 454, 'kitas text', 77841, 454, 'labas']
console.log(dataArr)

function task41a() {
  for (let i = 0; i < dataArr.length; i++) {
    if (typeof dataArr[i] === 'number') {
      console.log(dataArr[i])
    }
  }
}

// task41a()

function task41b() {
  dataArr.forEach((item) => {
    if (typeof item === 'number') {
      console.log(item)
    }
  })
}

// task41b()

console.groupEnd()

const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

function task47a(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      const output = `Index: ${i}, Number: ${arr[i]}`
      console.log(output)
    }
  }
}

// task47a(data)

function task47b(arr) {
  console.log(arr)

  arr.forEach((item, index) => {
    if (typeof item === 'number') {
      const output = `Index: ${index}, Number: ${item}`
      console.log(output)
    }
  })
}

// task47b(data)

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

function task49a(arr) {
  const numsArr = arr.filter(item => typeof item === 'number')
  
  for (let i = 0; i < numsArr.length; i++) {
    const currentNum = numsArr[i]

    if (i === 0) {
      console.log(currentNum)
    } else {
      const previousNum = numsArr[i - 1]
      const answer = currentNum * previousNum
      const output = `${currentNum} * ${previousNum} = ${answer}`

      console.log(output)
    }
  }
}

// task49a(data)

function task49b(arr) {
  const numsArr = arr.filter(item => typeof item === 'number')

  numsArr.map((num, index) => {
    if (index === 0) {
      console.log(num)
    } else {
      const previousNum = numsArr[index - 1]
      const answer = num * previousNum
      const output = `${num} * ${previousNum} = ${answer}`

      console.log(output)
    }
  })
}

// task49b(data)

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

function task415a(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    if (typeof item === 'string') {

      if (i === 0) {
        const nextItem = arr[i + 1]
        const output = `Word ${item} is the first in the array and next item the array is ${nextItem}.`
        
        console.log(output)
      } else if (i === arr.length - 1) {
        const previousItem = arr[i - 1]
        const output = `Word ${item} is the last in the array and previous item the array is ${previousItem}.`
        
        console.log(output)
      } else {
        const previousItem = arr[i - 1]
        const nextItem = arr[i + 1]
        
        const output = `Word ${item} is between ${previousItem} and ${nextItem} in the array`
        
        console.log(output)
      }
    }
  }
}

task415a(data)