const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  // let personName = document.querySelector('#person-name').value
  // let personName = form.querySelector('#person-name').value
  // let personName = event.target.querySelector('#person-name').value

  let formElement = event.target
  // let personName = formElement.elements['person-name'].value
  // let personName = formElement['person-name'].value
  let personName = formElement.querySelector('#person-name').value

  let personAge = formElement.querySelector('#person-age').value

  let color = formElement.querySelector('#color').value
  // let color = formElement['color'].value
  // let color = formElement.color.value

  let email = formElement.querySelector('#email').value

  console.log(personName)
  console.log(personAge)
  console.log(color)
  console.log(email)

  let infoWrapper = document.createElement('div')
  infoWrapper.innerHTML = `<h2>${personName}</h2>
                           <p>${personName} is ${personAge} years old and an email is ${email}....</p>`

  let contentElement = document.querySelector('#content')
  contentElement.append(infoWrapper)
})