let nav = document.getElementById('nav')
let logo = document.getElementById('logo')
let navItems = document.getElementById('nav-items')
let greeting = document.getElementById('greeting')
let quote = document.getElementById('quote')

let intersect = document.getElementById('intersection-point')

let shrinkAtTop = _ => {
  nav.classList.replace('nav', 'nav-shrunk')
  logo.classList.replace('logo', 'logo-shrunk')
}


let revertAtTop = _ => {
  nav.classList.replace('nav-shrunk', 'nav')
  logo.classList.replace('logo-shrunk', 'logo')
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


let quoteToGrid = new IntersectionObserver((entries) => {
  const [ el ] = entries
  if (!el.isIntersecting) {
    quote.style.position = 'fixed'
    quote.style.bottom = '91%'
    quote.style.right = '4%'
    quote.style.fontSize = '4.5px'
    quote.style.zIndex = '2'
    quote.style.animation = 'none';
    quote.offsetHeight; /* trigger reflow */
    quote.style.animation = 'slide-from-right .5s';
  }
  else {
    quote.style.position = ''
    quote.style.bottom = ''
    quote.style.zIndex = ''
    quote.style.right = ''
    quote.style.fontSize = ''
    quote.style.animation = 'none';
    quote.offsetHeight; /* trigger reflow */
    quote.style.animation = 'pop-in .5s';
  }
})

quoteToGrid.observe(greeting)
