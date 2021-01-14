const express = require('express')
const app = express()
const port = 3000
const weather = require('./controllers/weather');
var cors = require('cors');
app.use(cors());


app.get('/car/{id}', async (req,res) => {
  const carId = req.query.id;
  const carIds = req.
  let weatherRes;
  if(!latitude || !longitude || !tempunit)
  {
    return res.status(400).send('please include all query parameters');
  }
  try{
    weatherRes = await weather.requestWeatherData(latitude,longitude,tempunit);
  } catch(err)
  {
      if(err.response && err.response.data)
      {
        return res.status(err.response.data.cod).send(err.response.data.message);
      }
    }
  if(weatherRes)
  {
    return res.status(200).send(weatherRes);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})