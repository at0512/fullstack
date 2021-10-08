var list = document.querySelector('ul')
var input  = document.querySelector('input')
var button = document.querySelector('button') 
 const callbackfnc = (event) =>{ 
     console.log(event.target) 
     console.log(input.value)
 }
 

button.addEventListener('click', callbackfnc)


