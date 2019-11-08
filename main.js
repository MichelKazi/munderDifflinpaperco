let navbar = document.getElementById('nav')
let logo = document.getElementById('logo')
let navGrid = document.getElementById('nav-grid')
let intersect = document.getElementById('intersection-point')

let shrinkAtTop = _ => {
  navbar.style.height = '10%'
  logo.style.height = '70%'
  logo.style.left = '10px'
  logo.style.top = '10px'
  logo.style.filter = 'brightness(75%)';
}

let revertAtTop = _ => {
    navbar.style.height = ''
    logo.style.height = ''
    logo.style.left = ''
    logo.style.top = ''
    logo.style.filter = ''
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
