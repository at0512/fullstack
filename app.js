var list = document.querySelector('ul')
var body = document.querySelector('body')

var input  = document.querySelector('input')
var button = document.querySelector('button') 
 const callbackfnc = (event) =>{ 
    //  const inputvalue = input.value
    //  const element = document.createElement('li')
    //  const textnode = document.createTextNode(inputvalue) 
    //  element.appendChild(textnode) 
    //  list.appendChild(element) 
    body.classList.toggle('dark')

 }

button.addEventListener('click', callbackfnc)


