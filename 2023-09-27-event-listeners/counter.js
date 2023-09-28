// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

let num = 5

let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let plusButton = document.createElement('button')
let minusButton = document.createElement('button')

numberDisplay.textContent = num
plusButton.textContent = '+'
minusButton.textContent = '-'

numberDisplay.style.color = 'green'

numbersWrapper.append(numberDisplay, minusButton, plusButton)

plusButton.addEventListener('click', () => {
  num++
  numberDisplay.textContent = num

  if (num > 9) {
    plusButton.setAttribute('disabled', true)
  }

  if (num > 1) {
    minusButton.removeAttribute('disabled')
  }

  if (num >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})

minusButton.addEventListener('click', () => {
  num--
  numberDisplay.textContent = num

  if (num <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (num <= 9) {
    plusButton.removeAttribute('disabled')
  }

  if (num >= 5) {
    numberDisplay.style.color = 'green'
  } else {
    numberDisplay.style.color = 'red'
  }
})