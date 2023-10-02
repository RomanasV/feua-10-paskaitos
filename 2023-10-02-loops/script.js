// console.log('- ' + 1 + '!!!')
// console.log('- ' + 2 + '!!!')
// console.log('- ' + 3 + '!!!')
// console.log('- ' + 4 + '!!!')
// console.log('- ' + 5 + '!!!')
// console.log('- ' + 6 + '!!!')
// console.log('- ' + 7 + '!!!')
// console.log('- ' + 8 + '!!!')
// console.log('- ' + 9 + '!!!')
// console.log('- ' + 10 + '!!!')
// console.log('- ' + 11 + '!!!')
// console.log('- ' + 12 + '!!!')
// console.log('- ' + 13 + '!!!')
// console.log('- ' + 14 + '!!!')
// console.log('- ' + 15 + '!!!')
// console.log('- ' + 16 + '!!!')
// console.log('- ' + 17 + '!!!')
// console.log('- ' + 18 + '!!!')
// console.log('- ' + 19 + '!!!')
// console.log('- ' + 20 + '!!!')

function count(num) {
  console.log('- ' + num + ' !!!')
}

// count(1)
// count(2)
// count(3)
// count(4)
// count(5)

// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

/*

for (kintamasis; sąlyga; kintamojo keitimas) {
  .....
}

*/

// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// } 

// for (let i = 0; i < 20; i++) {
//   console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//   count(i)
// }


function task1() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 2)
  }
}

// task1()

function task2() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 5)
  }
}

// task2()

function task3() {
  for (let i = 1; i <= 100; i++) {
    console.log(i + 5)
  }
}

// task3()

function task4() {
  for (let i = 1; i <= 100; i++) {
    console.log(i - 2)
  }
}

// task4()

function task5() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i)
    // console.log(Math.pow(i, 2))
    console.log(i**2)
  }
}

// task5()

function task6() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i * i)
    // console.log(Math.pow(i, 3))
    console.log(i**3)
  }
}

// task6()

function task71() {
  for (let i = 100; i >= 1; i--) {
    console.log(i * 2)
  }
}

task71()