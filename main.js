let navbar = document.getElementById('nav')
let logo = document.getElementById('logo')

document.addEventListener('scroll', _ => {
  navbar.style.height = '10%'
  logo.style.height = '70%'
  logo.style.left = '10px'
  logo.style.top = '10px'
});
