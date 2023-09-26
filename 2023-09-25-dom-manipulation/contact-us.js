let content = document.querySelector('#content')

let container = createElement('container')
content.append(container)

let contentWrapper = createElement('content-wrapper')
container.append(contentWrapper)

let shopsWrapper = createElement('shops-wrapper')
let mapWrapper = createMapElement()

contentWrapper.append(shopsWrapper, mapWrapper)

let shopsSectionTitle = createElement('section-title', 'h2', 'Find us')
let shopsList = createElement('shops-list')

shopsWrapper.append(shopsSectionTitle, shopsList)

let shopItem1 = createShopItem(
  'Parduotuvė 1', 
  '+370454654651', 
  'info@parduotuve1.lt', 
  'Palangos g. 1, 44260 Kaunas', 
  'tel:+370454654651', 
  'mailto:info@parduotuve1.lt', 
  'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
)

let shopItem2 = createShopItem(
  'Parduotuvė 2',
  '+370454654652',
  'info@parduotuve2.lt',
  'Palangos g. 2, 44260 Kaunas',
  'tel:+370454654652',
  'mailto:info@parduotuve2.lt',
  'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
)

let shopItem3 = createShopItem(
  'Parduotuvė 3',
  '+370454654653',
  'info@parduotuve3.lt',
  'Palangos g. 3, 44260 Kaunas',
  'tel:+370454654653',
  'mailto:info@parduotuve3.lt',
  'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
)

let shopItem4 = createShopItem(
  'Parduotuvė 4',
  '+370454654654',
  'info@parduotuve4.lt',
  'Palangos g. 4, 44260 Kaunas',
  'tel:+370454654654',
  'mailto:info@parduotuve4.lt',
  'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
)

let shopItem5 = createShopItem(
  'Parduotuvė 5',
  '+370454654655',
  'info@parduotuve5.lt',
  'Palangos g. 5, 44260 Kaunas',
  'tel:+370454654655',
  'mailto:info@parduotuve5.lt',
  'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
)

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4, shopItem5)

function createShopItem(title, shopPhone, shopEmail, shopAddress, phoneLink, emailLink, addressLink) {
  let shopItem = createElement('shop-item')
  
  let shopTitle = createElement('shop-title', 'h3', title)
  let shopContactsList = createElement('shop-contacts-list', 'ul')
  
  shopItem.append(shopTitle, shopContactsList)

  let phoneElement = createShopContactsItem('Phone: ', shopPhone, phoneLink)
  let emailElement = createShopContactsItem('Email: ', shopEmail, emailLink)
  let addressElement = createShopContactsItem('Address: ', shopAddress, addressLink, '_blank')

  shopContactsList.append(phoneElement, emailElement, addressElement)
  
  return shopItem
}

function createShopContactsItem(title, linkText, link = '#', linkTarget = '_self') {
  let shopContactItem = createElement('shop-contacts-item', 'li')
  let titleElement = createElement('shop-contacts-item-title', 'span', title)

  let linkElement = document.createElement('a')
  linkElement.textContent = linkText
  linkElement.href = link
  linkElement.target = linkTarget

  shopContactItem.append(titleElement, linkElement)

  return shopContactItem
}

function createMapElement() {
  let mapWrapper = createElement('map-wrapper')

  // mapWrapper.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194441.91156701514!2d23.89974517269703!3d54.83160015047921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72270b167d343%3A0x614bd1e0c7378bbc!2sKaunas%2C%20Kaunas%20City%20Municipality!5e0!3m2!1sen!2slt!4v1693322492806!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  let mapIframe = document.createElement('iframe')
  mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194441.91156701514!2d23.89974517269703!3d54.83160015047921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72270b167d343%3A0x614bd1e0c7378bbc!2sKaunas%2C%20Kaunas%20City%20Municipality!5e0!3m2!1sen!2slt!4v1693322492806!5m2!1sen!2slt'
  mapIframe.width = '600'
  mapIframe.height = '450'
  mapIframe.style = 'border: 0;'
  mapIframe.allowFullScreen = ''
  mapIframe.loading = 'lazy'
  mapIframe.referrerPolicy = 'no-referrer-when-downgrade'

  mapWrapper.append(mapIframe)

  return mapWrapper
}

function createElement(className, tag = 'div', text = '') {
  let element = document.createElement(tag)
  if (className) {
    element.classList.add(className)
  }
  element.textContent = text

  return element
}