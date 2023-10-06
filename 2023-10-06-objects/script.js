/*

Studentas 1:
  - Vardas: John,
  - Pavarde: Doe,
  - Amzius: 25,
  - Miestas: Vilnius,
  - Grupe: FEUA10


Objekto sintaksė:

let obj = {
  key: 'value',
}

*/

let studentObj = {
  name: 'John', // Property (key: value)
  surname: 'Doe',
  'middle name': 'Steve',
  age: 25,
  city: 'Vilnius',
  group: 'FEUA10',
  isActive: true,
  address: {
    city: 'Vilnius',
    street: 'Vilniaus st.',
    apartment: 15,
    country: 'Lithuania',
  },
  getFullName: function() {
    return `Full name is: ${this.name} ${this.surname}.`
  },
  setStudentInactive: function() {
    this.isActive = false
  },
  setStudentActivity: function(newActivityStatus) {
    if (typeof newActivityStatus === 'boolean') {
      this.isActive = newActivityStatus
    }
  }
}


// Objekto properties pasiekimas
console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['isActive'])
console.log(studentObj['address'])
console.log(studentObj['address']['city'])
console.log(studentObj['address']['street'])
console.log(studentObj['address']['apartment'])
console.log(studentObj['address']['country'])

console.log(studentObj['middle name'])

let propertyName = 'age'
console.log(studentObj[propertyName])

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.age)
console.log(studentObj.city)
console.log(studentObj.group)
console.log(studentObj.isActive)
console.log(studentObj.address)
console.log(studentObj.address.city)
console.log(studentObj.address.street)
console.log(studentObj.address.apartment)
console.log(studentObj.address.country)

// Objekto properties pakeitimas
console.log(studentObj.age)
// studentObj.age = 26
studentObj.age = studentObj.age + 1
console.log(studentObj.age)

console.log(studentObj.city)
studentObj['city'] = 'Kaunas'
console.log(studentObj.city)

// Objekto properties kŪrimas
// studentObj.birthCity = 'Klaipėda'
studentObj['birth city'] = 'Klaipėda'

// Objekto properties ištrynimas
delete studentObj.city
delete studentObj['middle name']

console.log(studentObj)

console.log(studentObj.getFullName())

console.log(studentObj.isActive)
studentObj.setStudentInactive()
console.log(studentObj.isActive)

studentObj.setStudentActive = function() {
  this.isActive = true
}

studentObj.setStudentActive()
console.log(studentObj.isActive)

studentObj.switchStudentActivity = function() {
  // if (this.isActive) {
  //   this.isActive = false
  // } else {
  //   this.isActive = true
  // }

  this.isActive = !this.isActive
}

studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)

studentObj.setStudentActivity(true)
console.log(studentObj.isActive)



const student2 = {}

student2.name = 'John'
student2.surname = 'Doe'
student2.age = 20

// console.log(student2)

