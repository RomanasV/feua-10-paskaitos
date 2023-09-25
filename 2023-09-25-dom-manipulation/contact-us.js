let content = document.querySelector('#content')

let container = document.createElement('div')
container.classList.add('container')
content.append(container)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
container.append(contentWrapper)