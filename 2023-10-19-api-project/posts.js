function init() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=25&_expand=user&_embed=comments')
    .then(res => res.json())
    .then(posts => {
      const content = document.querySelector('#content')

      const pageTitle = document.createElement('h1')
      pageTitle.textContent = 'Posts:'

      const postsList = document.createElement('ul')
      postsList.classList.add('posts-list')

      content.append(pageTitle, postsList)

      posts.forEach((post) => {
        const userName = post.user.name
        const commentsCount = post.comments.length
        const postItem = document.createElement('li')
        const postLink = document.createElement('a')
        postLink.textContent = `${post.title} (${commentsCount})`
        postLink.href = './post.html'

        const userLink = document.createElement('a')
        userLink.textContent = userName
        userLink.href = './user.html'

        postItem.append(postLink, ' - ', userLink)

        postsList.append(postItem)
      })

      console.log(postsList)
    })
}

init()