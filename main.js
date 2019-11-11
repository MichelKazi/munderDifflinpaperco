let navbar = document.getElementById('nav')
let logo = document.getElementById('logo')
let navGrid = document.getElementById('nav-grid')
let navbtn = document.getElementsByClassName('btn')

let intersect = document.getElementById('intersection-point')

let shrinkAtTop = _ => {
  navbar.classList.replace('nav', 'nav-shrunk')
  logo.classList.replace('logo', 'logo-shrunk')
  navGrid.classList.replace('nav-grid', 'nav-grid-shrunk')
  for (b of navbtn){
    b.classList.replace('nav-btn', 'nav-btn-shrunk')
  }
}

let revertAtTop = _ => {
  navbar.classList.replace('nav-shrunk', 'nav')
  logo.classList.replace('logo-shrunk', 'logo')
  navGrid.classList.replace('nav-grid-shrunk', 'nav-grid')
  for (b of navbtn){
    b.classList.replace('nav-btn-shrunk', 'nav-btn')
  }
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
