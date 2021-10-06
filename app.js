var heading = document.getElementById('heading')
heading.innerHTML="this is a styled heading" 
var body = document.querySelector('body')
heading.style = "color:red; font-size:2rem"
console.log(heading)
console.log(heading.classList)
console.log(heading.classList.add('five'))
console.log(heading.classList.remove('one'))
console.log(heading.classList) 
body.classList.add('dark')




