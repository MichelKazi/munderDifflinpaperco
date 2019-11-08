let navbar = document.getElementById('nav')
let logo = document.getElementById('logo')

let revertAtTop = _ => {
  if (window.pageYOffset === 0) {
    navbar.style.height = ''
    logo.style.height = ''
    logo.style.left = ''
    logo.style.top = ''
    logo.style.filter = ''
  }
}

document.addEventListener('scroll', _ => {
  navbar.style.height = '10%'
  logo.style.height = '70%'
  logo.style.left = '10px'
  logo.style.top = '10px'
  logo.style.filter = 'brightness(75%)';
});

document.addEventListener('scroll', revertAtTop);
