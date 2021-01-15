const express = require('express')
const app = express()
const port = 3000
const pgClient = require('./models/pgclient');
var cors = require('cors');

app.use(cors());

pgClient.connect();

app.get('/car/{id}', async (req,res) => {
  const carIds = req.query.id;
  const sqlParams = carIds.split(';').join(',');
  const sqlQuery = `SELECT * FROM cars WHERE id IN ('${sqlParams}');`
  let sqlRes;
  try{
    sqlRes =  pgClient.query(sqlQuery);
  }catch(err)
  {
    return res.status('400').send('Server Internal Error');
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})