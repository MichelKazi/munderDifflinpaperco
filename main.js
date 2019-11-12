let nav = document.getElementById('nav')
let logo = document.getElementById('logo')
let navLinks = document.getElementById('nav-links')
let greeting = document.getElementById('greeting')
let quote = document.getElementById('quote')

let intersect = document.getElementById('intersection-point')

navLinks.children[0].style.gridArea = 'Home'
navLinks.children[1].style.gridArea = 'Pricing'
navLinks.children[2].style.gridArea = 'About'

let shrinkAtTop = _ => {
  nav.classList.replace('nav', 'nav-shrunk')
  logo.classList.replace('logo', 'logo-shrunk')
  navLinks.classList.replace('nav-links', 'nav-links-shrunk')
}

let revertAtTop = _ => {
  nav.classList.replace('nav-shrunk', 'nav')
  logo.classList.replace('logo-shrunk', 'logo')
  navLinks.classList.replace('nav-links-shrunk', 'nav-links')
}

let resizer = new IntersectionObserver((entries) => {
  const [ el ] = entries
  if (el.isIntersecting) {
    revertAtTop()
  } else {
    shrinkAtTop()
  }
})
resizer.observe(intersect)

quote.addEventListener('mouseover', _ => {
  quote.style.backgroundColor = '#be023d'
})
quote.addEventListener('mouseout', _ => {
  quote.style.backgroundColor = 'transparent'
})

let quoteToGrid = new IntersectionObserver((entries) => {
  const [ el ] = entries
  if (!el.isIntersecting) {
    quote.style.position = 'fixed'
    quote.style.top = '1%'
    quote.style.right = '13%'
    quote.style.zIndex = '2'
    quote.style.backgroundColor = 'transparent'
    quote.style.animation = 'none';
    quote.offsetHeight; /* trigger reflow */
    quote.style.animation = 'slide-from-right .63s';
  }
  else {
    quote.style.position = ''
    quote.style.bottom = ''
    quote.style.zIndex = ''
    quote.style.right = ''
    quote.style.fontSize = ''
    quote.style.backgroundColor = ''
    quote.style.animation = 'none';
    quote.offsetHeight; /* trigger reflow */
    quote.style.animation = 'pop-in .5s';
  }
})

quoteToGrid.observe(greeting)
