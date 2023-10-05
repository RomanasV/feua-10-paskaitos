function init() {
  const studentForm = document.querySelector('#student-form')
  const studentsList = document.querySelector('#students-list')

  itKnowledgeChange()

  studentForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const form = event.target

    const name = document.querySelector('#name').value
    const surname = studentForm.querySelector('#surname').value
    const age = form.querySelector('#age').value
    // const phone = form.elements.phone.value
    const phone = form.phone.value
    const email = form.email.value
    const itKnowledge= form['it-knowledge'].value
    // const group = form.querySelector('input[name="group"]:checked').value
    const group = form.group.value
    const interests = form.querySelectorAll('input[name="interest"]:checked')
    
    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')
    
    const nameElement = document.createElement('h2')
    nameElement.textContent = `${name} ${surname}`

    const ageElement = document.createElement('p')
    ageElement.textContent = `Age: ${age}`

    const phoneElement = document.createElement('p')
    phoneElement.textContent = `Phone: ****`

    const emailElement = document.createElement('p')
    emailElement.textContent = `Email: ****`

    const itKnowledgeElement = document.createElement('p')
    itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}`

    const groupElement = document.createElement('p')
    groupElement.textContent = `Group: ${group} gr.`

    const interestsWrapper = document.createElement('div')
    interestsWrapper.classList.add('interests-wrapper')

    const interestsTitle = document.createElement('h3')
    interestsTitle.textContent = 'Interests:'

    const interestsList = document.createElement('ul')

    for (let i = 0; i < interests.length; i++) {
      const interestItem = document.createElement('li')
      interestItem.textContent = interests[i].value
      interestsList.append(interestItem)
    }

    interestsWrapper.append(interestsTitle, interestsList)

    const privateInfoButton = document.createElement('button')
    privateInfoButton.textContent = 'Show private info'

    let showPrivateInfo = false

    privateInfoButton.addEventListener('click', function() {
      showPrivateInfo = !showPrivateInfo

      if (showPrivateInfo) {
        privateInfoButton.textContent = 'Hide private info'
        phoneElement.textContent = `Phone: ${phone}`
        emailElement.textContent = `Email: ${email}`
      } else {
        privateInfoButton.textContent = 'Show private info'
        phoneElement.textContent = `Phone: ****`
        emailElement.textContent = `Email: ****`
      }
    })

    const removeStudentButton = document.createElement('button')
    removeStudentButton.textContent = 'Remove Student'

    removeStudentButton.addEventListener('click', function() {
      studentItem.remove()

      alertMessage(`Student (${name} ${surname}) was removed!`)
    })
    
    studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper, privateInfoButton, removeStudentButton)

    studentsList.prepend(studentItem)

    form.reset()

    const createStudentText = `Student (${name} ${surname}) was created!`
    alertMessage(createStudentText)
  })
}

init()

function itKnowledgeChange() {
  const itKnowledgeInput = document.querySelector('#it-knowledge')
  const itKnowledgeOutput = document.querySelector('#it-knowledge-output')

  itKnowledgeInput.addEventListener('input', function() {
    itKnowledgeOutput.textContent = itKnowledgeInput.value
  })
}

function alertMessage(text) {
  const alertMessage = document.querySelector('#alert')
  alertMessage.textContent = text

  setTimeout(function() {
    alertMessage.textContent = ''
  }, 5000)
}