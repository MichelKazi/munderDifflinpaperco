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

//This is the bad thing to do
// setInterval(() => {
//   if (window.pageYOffset > 0)
//     shrinkAtTop()
//   if (window.pageYOffset === 0)
//     revertAtTop()
// }, 50);

for (b of navbtn) {
  b.addEventListener('mouseover', _ => {
    b.style.backgroundColor = '#faab00'
    b.style.fontSize = '10px'
  });
  b.addEventListener('mouseout', _ => {
    b.style.backgroundColor = ''
    b.style.fontSize = ''
  });
}
