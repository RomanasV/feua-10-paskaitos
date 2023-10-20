async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
  const users = await res.json()

  const content = document.querySelector('#content')

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = 'No users :('
  content.append(pageTitle)

  if (users.length > 0) {
    pageTitle.textContent = 'Users:'

    const usersList = document.createElement('ul')
    content.append(usersList)

    users.forEach(user => {
      const postsCount = user.posts.length
      const userItem = document.createElement('li')
      const userLink = document.createElement('a')
      userLink.textContent = `${user.name} (${postsCount})`
      userLink.href = './user.html?user_id=' + user.id

      userItem.append(userLink)
      usersList.append(userItem)
    })
  }
}

init()