const assert = require('assert');
const pgclient = require('../pgclient');

describe('cars api test ', () => {
    describe('Connecting PG Client',  () => {
        it('should connect without error', async function()
        {
        await pgclient.connect();
        let database = await pgclient.query('SELECT id from cars');
        console.log(database);
        });
    })
    describe('API Test',  () => {
      it('should send a request back', async function()
      {
        let res;
        try{
          res = await axios.get('http://localhost:3000/cars');
        }catch(err)
        {
          assert(err,!err);
        }
        assert(res,res);
      });
  })
})