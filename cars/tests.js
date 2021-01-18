const axios = require('axios');

const y = async() => {
let x;
try{x=await axios.get('host.docker.internal:3001/cars');
console.log(x);
}catch(err)
{
    console.log(err);
}    
console.log(x);
}
y();

// const z = () => {
//     const id = [1,2,3,4,5];
//     const chunk = 6;
//     for(let i=0; i<id.length; i+ chunk)
//     {
//         console.log(id.splice(0,i+chunk));
//     }
// }

// z();