const express = require('express')
const app = express()
const port = process.env.PORT  || 3000
const axios = require('axios');
const _ = require('lodash');
const pgClient = require('./models/pgclient')

var cors = require('cors');

app.use(cors());
pgClient.connect();

const host = process.env.host || 'localhost';
const carServicePort = process.env.carport || 3002;


const requestId = id => {
  return new Promise(async (resolve,reject)=> {
    let res; 
    try{
      res = await axios.get(`http://${host}:${carServicePort}/car/id${id}`)
      console.log(res);
    }
    catch(err)
    {
      reject(err);
    }
      resolve()
  })
}

app.get('/cars', async (req,res) => {
  let database;
  try{ 
    database = await pgClient.query("SELECT id from cars");
  }catch(err)
  {
    console.log(err);
  }
  if(database.rows)
  {
    const listOfId = database.rows;
    const promiseBatch = [];
    const ids =[];
    listOfId.forEach((obj) => {
      ids.push(obj.id);
    });
    const idReq = ids.join(';');
    await requestId(idReq);
    }


  // const response = []
  // carsId.forEach(async(carId) => {
  //   const carRes = await axios.get(`/car/${carId}`);
  //   console.log(carRes);
  // })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})