import { MENU_ITEMS } from "./config.js"

export default function header() {
  const headerElement = document.createElement('header')

  const navElement = document.createElement('nav')
  navElement.classList.add('main-navigation')

  const menuList = document.createElement('ul')
  menuList.classList.add('menu-list')

  MENU_ITEMS.forEach(item => {
    const menuItem = document.createElement('li')
    menuItem.classList.add('menu-item')
  
    const menuLink = document.createElement('a')
    menuLink.classList.add('menu-link')

    if (item.path === location.pathname) {
      menuLink.classList.add('active')
    }
  
    menuLink.textContent = item.text
    menuLink.href = '.' + item.path
  
    menuItem.append(menuLink)
    menuList.append(menuItem)
  })

  navElement.append(menuList)
  headerElement.append(navElement)
  return headerElement
}
