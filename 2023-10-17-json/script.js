console.groupCollapsed('JSON')

const obj = {
  name: 'John',
  age: 28,
  nextAge: 28 + 1,
  children: ['Child 1', 'Child 2'],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddress() {
    return `Address is ${this.address.street} ${this.address.city}, ${this.address.country}.`
  },
  test1: undefined,
  test2: null,
}

console.log(obj['name'])
console.log(obj.age)
console.log(obj.children[0])
console.log(obj.address.city)
console.log(obj.getAddress())

// Įprastas objektas
console.log(typeof obj, obj)

// Objektas paverčiamas į JSON objektą
const jsonObj = JSON.stringify(obj)
console.log(typeof jsonObj, jsonObj)

// JSON to obj
const convertedJson = JSON.parse(jsonObj)
console.log(typeof convertedJson, convertedJson)

console.groupEnd()

// fetch('obj.json')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })

// fetch('obj.json')
//   .then(response => response.json())
//   .then(obj => {
//     console.log(typeof obj, obj)
//     console.log(obj['name'])
//     console.log(obj.age)
//     console.log(obj.children[0])
//     console.log(obj.address.city)
//   })

function getJsonObj() {
  fetch('obj.json')
    .then(response => response.json())
    .then(obj => {
      console.log(typeof obj, obj)
    })
}

// getJsonObj()

async function getJsonObjAsync() {
  const response = await fetch('obj.json')
  const obj = await response.json()

  console.log(obj)
}

// getJsonObjAsync()

