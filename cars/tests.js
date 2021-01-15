const axios = require('axios');

const y = async() => {
let x;
try{x=await axios.get('http://localhost:3001/cars');
console.log(x);
}catch(err)
{
    console.log(err);
}    
console.log(x);
}
y();