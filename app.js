var list = document.querySelector('ul')
var input  = document.querySelector('input')
var button = document.querySelector('button') 
 const callbackfnc = (eve) =>{
     console.log(eve.value)
     console.log(eve.target)
 }

button.addEventListener('click', callbackfnc)


