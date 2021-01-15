const {Client} = require('pg');

const pgclient = new Client({
    password: process.env.POSTGRES_PASSWORD || "pass",
    user: process.env.POSTGRES_USER || "samcart",
    host: process.env.HOST || "localhost",
    port: process.env.PORTS || "35432"
  });


class CarsController{
    async runAllQueries(queries) {
        const batches = _.chunk(queries, BATCH_S);
        const results = [];
        while (batches.length) {
          const batch = batches.shift();
          const result = await Promises.all(batch.map(runQuery));
          results.push(result)
        }
        return _.flatten(results);
      }

    async getCarsInfo(req,res){
    let carIds;
    try{
        carIds = pgclient.query('SELECT id FROM cars');
    }catch(err)
    {
        /* Because it involves the db we are not going to directly return the error to the 
        requested User
        */
        console.log(err);
        return res.status(400).send('Internal Server Error with pgclient');
    }
    if(carIds && carIds.result){
        
    }
    }


}
  module.exports= CarsController;