const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

// button.addEventListener('click', (req, res) => { 
//     localStorage.setItem('input', [1, 2, 3, 4]) 
//         div.innerHTML = input.value
// }) 
 // console.log(localStorage.getItem('input')) 
 const arr = [1, 2, 3, 4, 5] 
 const val = JSON.stringify(arr) 
 console.log(val) 
 localStorage.setItem('aj', val) 
 console.log(JSON.parse(localStorage.getItem('aj')))


