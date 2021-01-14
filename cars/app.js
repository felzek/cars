const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
var cors = require('cors');
app.use(cors());

app.get('/cars', async (req,res) => {
  const response = []
  carsId.forEach(async(carId) => {
    const carRes = await axios.get(`/car/${carId}`);
    console.log(carRes);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})