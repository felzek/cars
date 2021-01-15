const express = require('express')
const app = express()
const client = require('pg');
const port = 3000
const axios = require('axios');
const _ = require('lodash');

var cors = require('cors');

app.use(cors());


const client = new Client({
  password: "pass",
  user: "samcart",
  host: "localhost",
});



app.get('/cars', async (req,res) => {
  let database;
  try{ 
    database = await client.query("SELECT id from cars");
  }catch(err)
  {
    console.log(err);
  }

  if(database.result && database.result.rows)
  {

  };
  const batch = [];

  // const response = []
  // carsId.forEach(async(carId) => {
  //   const carRes = await axios.get(`/car/${carId}`);
  //   console.log(carRes);
  // })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})