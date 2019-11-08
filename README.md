# Munder Difflin Paper Co.

## Goal
For this project, I was instructed to create a one page website for a fictional company

## Learning Objectives
By the end of this project, I'm expected to demonstrate understanding of semantic HTML, element targeting in CSS, behavioral JavaScript, and animations.

My animations were done using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) in lieu of adding event listeners for scroll events or using setInterval to check the viewport constantly and leave dangling intervals. Although this is visually unnoticeable to the user, the Intersection Observer proved to be much better optimized and saves plenty of resources.

### Bad
#### Using setInterval
```javascript
setInterval(() => {
  if (window.pageYOffset > 0)
    shrinkAtTop()
  if (window.pageYOffset === 0)
    revertAtTop()
}, 50);
```
#### Using Event listeners
```JavaScript
document.addEventListener('scroll', shrinkAtTop);

document.addEventListener('scroll', revertAtTop);
```
### Good
#### Using IntersectionObserver
```javascript
let resizer = new IntersectionObserver((entries) => {
  const [ el ] = entries
  if (el.isIntersecting) {
    revertAtTop()
  } else {
    shrinkAtTop()
  }
})
resizer.observe(intersect)
```
