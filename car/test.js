const axios = require('axios');

const x = async() => {
    try{
    const y = await axios.get('http://localhost:3000/car/JH290XJ;erew');
        console.log(y.data);
}
    catch(err)
    {
        console.log(err);
    }

}

x();