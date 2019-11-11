let navbar = document.getElementById('nav')
let logo = document.getElementById('logo')
let navGrid = document.getElementById('nav-items')
let navbtn = document.getElementsByClassName('btn')
let quote = document.getElementById('quote')
let contactUs = document.getElementById('contact-us')

let intersect = document.getElementById('intersection-point')

let shrinkAtTop = _ => {
  navbar.classList.replace('nav', 'nav-shrunk')
  logo.classList.replace('logo', 'logo-shrunk')
  navGrid.classList.replace('nav-items', 'nav-items-shrunk')
  for (b of navbtn){
    b.classList.replace('nav-btn', 'nav-btn-shrunk')
  }
  quote.style.left = '65.5%'
  contactUs.style.left = '78.5%'
}

let revertAtTop = _ => {
  navbar.classList.replace('nav-shrunk', 'nav')
  logo.classList.replace('logo-shrunk', 'logo')
  navGrid.classList.replace('nav-items-shrunk', 'nav-items')
  for (b of navbtn){
    b.classList.replace('nav-btn-shrunk', 'nav-btn')
  }
  quote.style.left = '35.5%'
  contactUs.style.left = '53.5%'
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

//This is the bad thing to do
// setInterval(() => {
//   if (window.pageYOffset > 0)
//     shrinkAtTop()
//   if (window.pageYOffset === 0)
//     revertAtTop()
// }, 50);
