const {Client} = require('pg');

const pgclient = new Client({
    password: process.env.POSTGRES_PASSWORD || "pass",
    user: process.env.POSTGRES_USER || "samcart",
    host: process.env.HOST || "localhost",
    port: process.env.PORTS || "35432"
  });


class CarsController{
    async getCarsInfo(req,res){
        let carInfo;
        try{
            carInfo = pgclient.query('SELECT id FROM cars');
        }catch(err)
        {
            return res.status(400).send('Internal Server Error');
        }
        
    }
}
  module.exports= CarsController;
  