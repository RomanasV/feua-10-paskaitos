// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)


// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 12. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

// 15. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente.

// 16.1. Sukurti mygtuką ir jį įdėti į li elementą.
// 16.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas.

let initialNum = 5

let num = initialNum

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let numberInput = document.createElement('input')
let plusButton = document.createElement('button')
let plus2Button = document.createElement('button')
let plus5Button = document.createElement('button')
let minusButton = document.createElement('button')
let minus2Button = document.createElement('button')
let minus5Button = document.createElement('button')
let resetButton = document.createElement('button')
let addGradeButton = document.createElement('button')
let gradeTitle = document.createElement('h4')
let gradeList = document.createElement('ul')

numberInput.type = 'number'
numberInput.min = 1
numberInput.max = 10

plusButton.textContent = '+'
plus2Button.textContent = '+2'
plus5Button.textContent = '+5'
minusButton.textContent = '-'
minus2Button.textContent = '-2'
minus5Button.textContent = '-5'
resetButton.textContent = 'Reset'
addGradeButton.textContent = 'Add Grade'
gradeTitle.textContent = 'Grades:'

numbersWrapper.append(numberDisplay, numberInput, minus5Button, minus2Button, minusButton, plusButton, plus2Button, plus5Button, resetButton, addGradeButton, gradeTitle, gradeList)

checkData()

numberInput.addEventListener('input', function() {
  num = Number(numberInput.value)
  checkData()
})

plusButton.addEventListener('click', function() {
  checkData(1)
})

plus2Button.addEventListener('click', function() {
  checkData(2)
})

plus5Button.addEventListener('click', function() {
  checkData(5)
})

minusButton.addEventListener('click', function() {
  checkData(-1)
})

minus2Button.addEventListener('click', function() {
  checkData(-2)
})

minus5Button.addEventListener('click', function() {
  checkData(-5)
})

resetButton.addEventListener('click', function() {
  num = initialNum
  checkData()
})

addGradeButton.addEventListener('click', function() {
  let gradeItem = document.createElement('li')
  gradeItem.style.color = numberDisplay.style.color

  let removeButton = document.createElement('button')
  removeButton.textContent = 'x'

  removeButton.addEventListener('click', function() {
    gradeItem.remove()
  })

  gradeItem.append(num, removeButton)

  gradeList.prepend(gradeItem)
})

function setColor() {
  if (num >= 7) {
    numberDisplay.style.color = 'green'
  } else if (num >= 5) {
    numberDisplay.style.color = 'orange'
  } else {
    numberDisplay.style.color = 'red'
  }
}

function checkData(numChange = 0) {
  num += numChange
  numberDisplay.textContent = num
  numberInput.value = num

  if (num > 9) {
    plusButton.setAttribute('disabled', true)
  } else {
    plusButton.removeAttribute('disabled')
  }
  
  if (num > 8) {
    plus2Button.setAttribute('disabled', true)
  } else {
    plus2Button.removeAttribute('disabled')
  }
  
  if (num > 5) {
    plus5Button.setAttribute('disabled', true)
  } else {
    plus5Button.removeAttribute('disabled')
  }

  if (num <= 1) {
    minusButton.setAttribute('disabled', true)
  } else {
    minusButton.removeAttribute('disabled')
  }

  if (num <= 2) {
    minus2Button.setAttribute('disabled', true)
  } else {
    minus2Button.removeAttribute('disabled')
  }

  if (num <= 5) {
    minus5Button.setAttribute('disabled', true)
  } else {
    minus5Button.removeAttribute('disabled')
  }

  setColor()
}