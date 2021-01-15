const express = require('express')
const app = express()
const port = process.env.PORT  || 3000
const axios = require('axios');
const pgClient = require('./models/pgclient')

var cors = require('cors');

app.use(cors());
pgClient.connect();

const host = process.env.host || 'localhost';
const carServicePort = process.env.carport || 3002;


const requestId = id => {
  return new Promise(async (resolve,reject)=> {
    let idReq = [];
    id.forEach((obj) => {
      idReq.push(obj.id);
    })
    const idList = idReq.join(';');
    let res; 
    try{
      res = await axios.get(`http://${host}:${carServicePort}/car/id${idList}`)
    }
    catch(err)
    {
      reject(err);
    }
      resolve(res.data);
  })
}


const flatten = arr => {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
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
    promiseBatch = [];
    const chunk = 100;
    console.log(listOfId.length);
    for(let i =0; i <= listOfId.length; i+=chunk){
     // Slice the array in batch of 100
      const batchIds = listOfId.slice(i, i+chunk);
      // Send the batch in to a promises for performance
      promiseBatch.push(requestId(batchIds));
    };
    // Resolve all the Promises in the promise batch for performance
    const res = await Promise.all(promiseBatch);
    // The Result is an array inside of an array, this flattnes it which shouldn't affect much performance
    const finalRes = flatten(res);
    // Return the final results along with a status 200
    return res.status(200).send(finalRes);
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})