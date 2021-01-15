const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const _ = require('lodash');
const pgclient = require('./models/pgclient')

var cors = require('cors');

app.use(cors());


app.get('/cars', async (req,res) => {
  let database;
  try{ 
    database = await pgclient.query("SELECT id from cars");
  }catch(err)
  {
    console.log(err);
  }

  let rowPromises = [];
  if(database.rows)
  {
    console.log(database.row);
  }
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