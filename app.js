const fs = require('fs')
// console.log(fs) 
fs.readFile('./text.txt',(error, data) =>{
    if(error) console.log(error) 
    else console.log(data.toString())
}) 
