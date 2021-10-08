const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1] 
const add = document.querySelector('#add')
const subract = document.querySelector('#sub') 
const result = document.querySelector('.result') 
// const addition = ()=>{
//    const results = parseInt(a.value) + parseInt(b.value) 
//    console.log(results) 
//    result.innerHTML = results
// } 
// const subractiom = ()=>{
//     const results = parseInt(a.value) - parseInt(b.value) 
//     console.log(results) 
//     result.innerHTML = results
//  } 
const fun = (event, operation)=>{
   if(operation=='add'){ 
      console.log(event.target)
      output = parseInt(a.value) + parseInt(b.value) 
      result.innerHTML = output  
   } 
   else {
      output = parseInt(a.value) * parseInt(b.value) 
      result.innerHTML = output
   }
}

add.addEventListener('click', (event) =>{
  return fun(event, 'add')
}) 
subract.addEventListener('click', (event)=> {
   return fun(subract)
})
