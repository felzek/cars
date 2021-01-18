const express = require('express')
const app = express()
const port = 3001
const pgClient = require('./models/pgclient');
var cors = require('cors');

app.use(cors());
try{
pgClient.connect();
}catch(err)
{
  console.log(err);
}

app.get('/car/:id', async (req,res) => {
  const carIds = req.params.id;
  const carIdsParam = carIds.split(';');
  let sqlRes;
  try{
    await pgClient.connect();
  }catch(err)
  {
    return res.status(400).send(err)
  }
  try{
    sqlRes =  await pgClient.query('SELECT * FROM cars WHERE Id = ANY($1::text[])',[carIdsParam]);
  }catch(err)
  {
    console.log(err);
    return res.status('400').send('Server Internal Error');
  }
  if(sqlRes.rows)
    return res.status('200').send(sqlRes.rows);
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})